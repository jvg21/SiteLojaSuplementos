import { Component } from '@angular/core';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { ProdutoService } from 'src/app/Application/service/produto.service';

@Component({
  selector: 'app-produto-search',
  templateUrl: './produto-search.component.html',
  styleUrls: ['./produto-search.component.css']
})
export class ProdutoSearchComponent {
   dataSource: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listar();
    // console.log(this.dataSource);
  }

  listar(){
    this.produtoService.listar().subscribe({
      next: (produto) => produto.map((x)=>{
        this.dataSource.push(x);
      }),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  adicionarCarrinho(id:number){
    alert(id);
    
  }
}
