import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ProdutoModel } from 'src/app/Application/model/produto.model';
import { ProdutoService } from 'src/app/Application/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent {
  displayedColumns: string[] = ['id', 'nome', 'valor', 'marca', 'peso','medidaPeso','ativado'];
  dataSource: ProdutoModel[] = [];
  selectedRow = new ProdutoModel;
  constructor(private produtoService: ProdutoService) { }

  adicionarControl = true;


  controlModal() {
    if (this.adicionarControl) {
      this.produtoForm.controls['Id'].setValue('');
      this.produtoForm.controls['Nome'].setValue('');
      this.produtoForm.controls['Valor'].setValue(0);
      this.produtoForm.controls['Peso'].setValue(1);
      this.produtoForm.controls['Marca'].setValue('');
    } else {
      this.produtoForm.controls['Id'].setValue(String(this.selectedRow.id));
      this.produtoForm.controls['Nome'].setValue(String(this.selectedRow.nome));
      this.produtoForm.controls['Valor'].setValue(this.selectedRow.valor || 0);
      this.produtoForm.controls['Peso'].setValue(this.selectedRow.peso || 1);
      this.produtoForm.controls['MedidaPeso'].setValue(String(this.selectedRow.medidaPeso));
      this.produtoForm.controls['Marca'].setValue(String(this.selectedRow.marca));
      this.produtoForm.controls['Ativado'].setValue(this.selectedRow.ativado || true);

    }
  }

  logs(row: ProdutoModel) {
    this.selectedRow = row;
    console.log(this.selectedRow);

  }
  ngOnInit(): void {
    this.listar();
    // console.log(this.dataSource)
  }

  produtoForm = new FormGroup({
    Id: new FormControl({ value: ' - ', disabled: true }),
    Nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Valor: new FormControl(0, [Validators.required, Validators.min(0)]),
    Peso: new FormControl(1, [Validators.required, Validators.min(0)]),
    MedidaPeso: new FormControl(''),
    Marca: new FormControl('', [Validators.required]),
    Ativado: new FormControl(true, [Validators.required])

  })

  adicionar() {
    console.log("oi");
    
    // let produto = new ProdutoModel;
    // produto.nome = this.produtoForm.controls['Id'].value || '';
    // produto.marca = this.produtoForm.controls['Marca'].value || '';
    // produto.peso = this.produtoForm.controls['Peso'].value || 1;
    // produto.medidaPeso = this.produtoForm.controls['MedidaPeso'].value || '';
    // produto.valor = this.produtoForm.controls['Valor'].value || 0;
    // produto.ativado = this.produtoForm.controls['Ativado'].value || true;

    // console.log(produto);
    
    // this.produtoService.salvar(produto).subscribe(produto => {
    //   this.listar()
    //   alert(produto.nome + " Gravado Com sucesso");
    // });

  }

  listar() {
    this.produtoService.listar().subscribe({
      next: (produto) => this.dataSource = produto,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  // alterar(){
  //   this.produtoService.alterar(this.selectedRow)
  // }
}
