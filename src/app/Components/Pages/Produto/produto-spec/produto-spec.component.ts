import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarrinhoModel } from 'src/app/Application/model/carrinho.model';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { CarrinhoService } from 'src/app/Application/service/carrinho.service';
import { ProdutoService } from 'src/app/Application/service/produto.service';

@Component({
  selector: 'app-produto-spec',
  templateUrl: './produto-spec.component.html',
  styleUrls: ['./produto-spec.component.css']
})
export class ProdutoSpecComponent {
  private routeSub = new Subscription;
  dataSource: ProdutoModel = new ProdutoModel;
  userData = new UsuarioModel;
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private carrinhoService:CarrinhoService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.produtoService.selecionar(Number(params['id'])).subscribe({
        next: (produto) => this.dataSource = produto,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    });
  }

  adicionarCarrinho(id:number){

    let carrinho = new CarrinhoModel;
    carrinho.idCliente = this.userData.id;
    carrinho.idProduto = id;
    this.carrinhoService.salvar(carrinho).subscribe(carrinho=>{
      alert("Produto Acionado ao Carrinho");
      
    });



}
}


