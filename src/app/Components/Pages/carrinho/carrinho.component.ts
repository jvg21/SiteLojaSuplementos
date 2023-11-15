import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarrinhoModel } from 'src/app/Application/model/carrinho.model';
import { PedidoModel } from 'src/app/Application/model/pedido.model';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { CarrinhoService } from 'src/app/Application/service/carrinho.service';
import { PedidoService } from 'src/app/Application/service/pedido.service';
import { ProdutoService } from 'src/app/Application/service/produto.service';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  dataSource: ProdutoModel[] = [];
  produtosCarrinho: ProdutoModel[] = [];
  carrinhoSource: CarrinhoModel[] = [];
  pedidoSource = new PedidoModel;
  userData = new UsuarioModel;
  idCliente = 0;
  total = 0;
  pixStyle = 'none';
  cartaoStyle = 'none';
  boletoStyle = 'none';
  produtoList = "";

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService, private usuarioService: UsuarioService,private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.getProduto();
    this.getCarrinho();
  }

  removerProduto(idProduto: number) {
    // console.log(idProduto);
    this.carrinhoService.delete(idProduto).subscribe(() => {
      alert('Produto Removido');
      window.location.reload();
    })
  }

  pagamentoForm = new FormGroup({
    Metodo: new FormControl(''),
  })


  setMetodo(){
    if(this.pagamentoForm.controls['Metodo'].value == 'pix'){
      this.setarPix();
    }else if(this.pagamentoForm.controls['Metodo'].value == 'boleto'){
      this.setarBoleto()
    }else{
      this.setarCartao();
    }
  }

  getProduto() {
    this.produtoService.listar().subscribe({
      next: (produto) => produto.map((x) => {
        this.dataSource.push(x);
      }),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });

  }

  getCarrinho() {
    this.usuarioService.getLogin().subscribe(usuario => {
      if (usuario.id != undefined || usuario.id != null) {
        // this.idCliente = usuario.id;
        this.carrinhoService.listar(usuario.id).subscribe({
          next: (carrinho) => carrinho.map((x) => {
            this.carrinhoSource.push(x);
            this.dataSource.map((j) => {
              if (x.idProduto == j.id) {
                this.produtosCarrinho.push(j);
                if (j.valor != undefined) {
                  this.total += j.valor;
                }
              }
            })
          }),
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });

      }

    });

    // console.log(this.produtosCarrinho);

  }

  setarPix(){
    this.pixStyle = 'block';
    this.cartaoStyle = 'none';
    this.boletoStyle ="none";
  }
  setarCartao(){
    this.pixStyle = 'none';
    this.cartaoStyle = 'block';
    this.boletoStyle ="none";
  }
  setarBoleto(){
    this.pixStyle = 'none';
    this.cartaoStyle = 'none';
    this.boletoStyle ="block";
  }
  realizarPagamento() {
    let date: Date = new Date();  

    this.pedidoSource.metodo = this.pagamentoForm.controls['Metodo'].value || 'cartao';
    this.pedidoSource.dataEntrega = date.getDate().toString()+"/"+(date.getMonth()+1).toString()+"/"+date.getFullYear().toString();

    
    this.pedidoSource.entrega = "Pedido a caminho";

    this.produtosCarrinho.map(x=>{
      this.produtoList += " "+x.nome+" "+ x.marca+" "+x.peso +" "+x.medidaPeso+",";
    })

    this.pedidoSource.produto = this.produtoList;
    this.pedidoSource.valor = this.total;    
    
    this.usuarioService.getLogin().subscribe(usuario => {
      this.pedidoSource.idCliente = usuario.id;

       console.log(this.pedidoSource);
      
      this.pedidoService.salvar(this.pedidoSource).subscribe({});
      
      if (usuario.id != undefined || usuario.id != null) {
        this.carrinhoService.deleteAll(usuario.id).subscribe({
          
        });
        //window.location.reload();
      }
    }
    )
    
    
  }
}









