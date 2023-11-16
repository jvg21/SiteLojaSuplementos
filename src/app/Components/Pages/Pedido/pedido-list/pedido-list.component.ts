import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidoModel } from 'src/app/Application/model/pedido.model';
import { PedidoService } from 'src/app/Application/service/pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent {
  displayedColumns: string[] = ['id', 'idCliente', 'produto', 'dataEntrega', 'valor','entrega','metodo'];
  dataSource: PedidoModel[] = [];
  selectedRow = new PedidoModel;
  listaPedidos: PedidoModel[] = [];
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.listar();
  }

  logs(row: PedidoModel) {
    this.selectedRow = row;

  }
  
  listar() {

    ////listar todos os pedidos
    this.pedidoService.listarAll().subscribe({
      next: (pedido) => this.listaPedidos = pedido,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  alterar(){
    ///alterar o status

    let pedido = new PedidoModel;
    pedido.id = Number(this.selectedRow.dataEntrega);
    pedido.entrega = 'Entregue';
    
    this.pedidoService.alterar(pedido).subscribe(produto => {
      this.listar()
      alert(produto.nome + " Alterado Com sucesso");
    });
    
  }
}