import {Component} from '@angular/core';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { ProdutoService } from 'src/app/Application/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent  {
  displayedColumns: string[] = ['id','nome','valor','marca','peso'];
  dataSource: ProdutoModel[] = [];
  clickedRows = new Set<ProdutoModel>();
  constructor(private produtoService: ProdutoService) {}

  logs(row:ProdutoModel){
    console.log(row);
    this.clickedRows.clear();
    this.clickedRows.add(row)
  }
  ngOnInit(): void {
    this.listar();
    console.log(this.dataSource)
  }

  listar() {
    this.produtoService.listar().subscribe({
      next: (produto) => this.dataSource = produto,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }
}
