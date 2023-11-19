import { Component } from '@angular/core';
import { produtoForm } from 'src/app/Application/common/form/produto.form';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { ProdutoService } from 'src/app/Application/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent {
  displayedColumns: string[] = ['id', 'nome', 'valor', 'marca', 'peso','medidaPeso','ativado','descricao','url'];
  dataSource: ProdutoModel[] = [];
  selectedRow = new ProdutoModel;
  produtoForm = produtoForm;
  adicionarControl = true;
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listar();
  }
  setAdiconarControll(foo:boolean){
    this.adicionarControl = foo;
    this.controlModal();
  }
  controlModal() {
    if (this.adicionarControl) {
      this.produtoForm.controls['Id'].setValue('');
      this.produtoForm.controls['Nome'].setValue('');
      this.produtoForm.controls['Valor'].setValue(0);
      this.produtoForm.controls['Peso'].setValue(1);
      this.produtoForm.controls['Marca'].setValue('');
      this.produtoForm.controls['Descricao'].setValue('');
      this.produtoForm.controls['Url'].setValue('');
    } else {
      this.produtoForm.controls['Id'].setValue(String(this.selectedRow.id));
      this.produtoForm.controls['Nome'].setValue(String(this.selectedRow.nome));
      this.produtoForm.controls['Valor'].setValue(this.selectedRow.valor || 0);
      this.produtoForm.controls['Peso'].setValue(this.selectedRow.peso || 1);
      this.produtoForm.controls['MedidaPeso'].setValue(String(this.selectedRow.medidaPeso));
      this.produtoForm.controls['Marca'].setValue(String(this.selectedRow.marca));
      this.produtoForm.controls['Ativado'].setValue(this.selectedRow.ativado || true);
      this.produtoForm.controls['Descricao'].setValue(this.selectedRow.descricao || '');
      this.produtoForm.controls['Url'].setValue(this.selectedRow.url || '');

    }
  }
  logs(row: ProdutoModel) {
    this.selectedRow = row;

  }
  adicionar() {
    
    let produto = new ProdutoModel;
    produto.nome = this.produtoForm.controls['Nome'].value || '';
    produto.marca = this.produtoForm.controls['Marca'].value || '';
    produto.peso = this.produtoForm.controls['Peso'].value || 1;
    produto.medidaPeso = this.produtoForm.controls['MedidaPeso'].value || '';
    produto.valor = this.produtoForm.controls['Valor'].value || 0;
    produto.ativado = this.produtoForm.controls['Ativado'].value || true;
    produto.descricao = this.produtoForm.controls['Descricao'].value || '';
    produto.url = this.produtoForm.controls['Url'].value || '';
    this.produtoService.salvar(produto).subscribe(produto => {
      this.listar()
      alert(produto.nome + " Gravado Com sucesso");
    });
  }

  listar() {
    this.produtoService.listar().subscribe({
      next: (produto) => this.dataSource = produto,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  alterar(){
    let produto = new ProdutoModel;
    produto.id = Number(this.produtoForm.controls['Id'].value);
    produto.nome = this.produtoForm.controls['Nome'].value || '';
    produto.marca = this.produtoForm.controls['Marca'].value || '';
    produto.peso = this.produtoForm.controls['Peso'].value || 1;
    produto.medidaPeso = this.produtoForm.controls['MedidaPeso'].value || '';
    produto.url = this.produtoForm.controls['Url'].value || '';
    produto.valor = this.produtoForm.controls['Valor'].value || 0;
    produto.ativado = this.produtoForm.controls['Ativado'].value || true;
    produto.descricao = this.produtoForm.controls['Descricao'].value || this.produtoForm.controls['Nome'].value || '';
    
    this.produtoService.alterar(produto).subscribe(produto => {
      this.listar()
      alert(produto.nome + " Alterado Com sucesso");
    });
    
  }
}
