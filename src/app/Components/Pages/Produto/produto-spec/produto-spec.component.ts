import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { ProdutoService } from 'src/app/Application/service/produto.service';

@Component({
  selector: 'app-produto-spec',
  templateUrl: './produto-spec.component.html',
  styleUrls: ['./produto-spec.component.css']
})
export class ProdutoSpecComponent {
  private routeSub = new Subscription;
  dataSource: ProdutoModel = new ProdutoModel;
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

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

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}


