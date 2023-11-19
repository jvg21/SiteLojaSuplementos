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
  displayedColumns: string[] = ['id', 'idCliente', 'produto', 'dataEntrega', 'valor','metodo','entrega'];
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
      next: (pedido) => this.dataSource = pedido,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    console.log(this.dataSource);
    
  }

  entregar(){
    ///alterar o status
    let date: Date = new Date();  
    let pedido = new PedidoModel;
    pedido.id = Number(this.selectedRow.id);
    this.pedidoService.entregar(pedido.id).subscribe(pedido => {
      alert("Pedido Entregue")
      this.listar();
    });
    
  }

}
