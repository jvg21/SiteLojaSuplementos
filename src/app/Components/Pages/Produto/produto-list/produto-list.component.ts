import { Component } from '@angular/core';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { ProdutoService } from 'src/app/Application/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent {
  displayedColumns: string[] = ['id','nome','valor','marca','peso'];
  dataSource: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) {}
  
  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.produtoService.listar().subscribe({
      next: (produto) => this.dataSource = produto,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }
}
