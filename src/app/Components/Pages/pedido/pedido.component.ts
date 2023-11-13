import { Component } from '@angular/core';
import { CarrinhoModel } from 'src/app/Application/model/carrinho.model';
import { PedidoModel } from 'src/app/Application/model/pedido.model';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { CarrinhoService } from 'src/app/Application/service/carrinho.service';
import { ProdutoService } from 'src/app/Application/service/produto.service';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  dataSource: ProdutoModel[] = [];
  produtosPedido: ProdutoModel[] = [];
  pedidoSource: PedidoModel[] = [];
  userData = new UsuarioModel;
  idCliente = 0;
  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getProduto();
    this.getPedido();
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

  getPedido() {
    this.usuarioService.getLogin().subscribe(usuario => {
      if (usuario.id != undefined || usuario.id != null) {
        // this.idCliente = usuario.id;
        this.carrinhoService.listar(usuario.id).subscribe({
          next: (carrinho) => carrinho.map((x) => {
            this.pedidoSource.push(x);
            this.dataSource.map((j) => {
              if (x.idProduto == j.id) {
                this.produtosPedido.push(j)
              }
            })
          }),
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });

      }

    });

    console.log(this.produtosPedido);


    // this.carrinhoSource.map((i)=>{

    //   
    // })


    // for(let i = 0;i<this.carrinhoSource.length;i++){
    //   for(let j = 0; j<this.dataSource.length;j++){ 
    //     if(this.carrinhoSource[i].idProduto == this.dataSource[j].id){
    //       this.produtosPedido.push(this.carrinhoSource[j]);
    //     }
    //   }
    // }
    // console.log(this.produtosPedido);

  }

}
