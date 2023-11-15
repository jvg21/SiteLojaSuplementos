import { Component } from '@angular/core';
import { CarrinhoModel } from 'src/app/Application/model/carrinho.model';
import { PedidoModel } from 'src/app/Application/model/pedido.model';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { CarrinhoService } from 'src/app/Application/service/carrinho.service';
import { PedidoService } from 'src/app/Application/service/pedido.model';
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
  constructor(private pedidoService: PedidoService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getPedido();
  }


  getPedido() {
    this.usuarioService.getLogin().subscribe(usuario => {
      if (usuario.id != undefined || usuario.id != null) {
        this.pedidoService.listar(usuario.id).subscribe({
          next: (carrinho) => carrinho.map((x) => {
            this.pedidoSource.push(x);
          }),
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });

      }

    });

  }

}
