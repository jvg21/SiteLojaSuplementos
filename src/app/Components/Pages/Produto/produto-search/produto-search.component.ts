import { Component } from '@angular/core';
import { CarrinhoModel } from 'src/app/Application/model/carrinho.model';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { CarrinhoService } from 'src/app/Application/service/carrinho.service';
import { ProdutoService } from 'src/app/Application/service/produto.service';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-produto-search',
  templateUrl: './produto-search.component.html',
  styleUrls: ['./produto-search.component.css']
})
export class ProdutoSearchComponent {
  dataSource: ProdutoModel[] = [];
  userData = new UsuarioModel;

  constructor(private produtoService: ProdutoService,private carrinhoService:CarrinhoService,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.listar();
    this.getLogin();
    // console.log(this.dataSource);
  }

  listar(){
    this.produtoService.listar().subscribe({
      next: (produto) => produto.map((x)=>{

        console.log(x.url);
        
        this.dataSource.push(x);
      }),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  getLogin(){
    this.usuarioService.getLogin().subscribe(usuario=>{
      this.userData = usuario;
    })
  }
  adicionarCarrinho(id:number){

    let carrinho = new CarrinhoModel;
    carrinho.idCliente = this.userData.id;
    carrinho.idProduto = id;
    this.carrinhoService.salvar(carrinho).subscribe(carrinho=>{
      alert("Produto Acionado ao Carrinho");
      
    });
    
  }

  redirectTo(id:number){
    if(id !=0){
    window.location.href = '/navegar/produto-spec/'+id;

    }
  }
}
