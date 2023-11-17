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
    // let data = date.getDate().toString()+"/"+(date.getMonth()+1).toString()+"/"+date.getFullYear().toString();
    // console.log(data);
    // pedido.entrega = 'Pedido Entregue: ' + data.toString();
    
    this.pedidoService.entregar(pedido.id).subscribe(pedido => {
      alert("Pedido Entregue")
      this.listar();
    });
    
  }

  // filtro1(){
  //   for(let i = 0;i<this.dataSource.length;i++){
  //     if(this.dataSource[i].entrega == "Pedido a caminho"){
  //       this.listaPedidos.push(this.dataSource[i]);
  //     }
  //   }
  //   this.dataSource = this.listaPedidos;
  // }

  // filtro2(){
  //   for(let i = 0;i<this.dataSource.length;i++){
  //     if(this.dataSource[i].entrega != "Pedido a caminho"){
  //       this.listaPedidos.push(this.dataSource[i]);
  //     }
  //   }
  //   this.dataSource = this.listaPedidos;
  // }
}
