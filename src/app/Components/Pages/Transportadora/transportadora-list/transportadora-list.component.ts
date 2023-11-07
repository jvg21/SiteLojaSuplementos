import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransportadoraModel } from 'src/app/Application/model/transportadora.model';
import { transportadoraService } from 'src/app/Application/service/transportadora.service';

@Component({
  selector: 'app-transportadora-list',
  templateUrl: './transportadora-list.component.html',
  styleUrls: ['./transportadora-list.component.css']
})
export class TransportadoraListComponent {
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'email', 'ativado'];
  dataSource: TransportadoraModel[] = [];
  selectedRow = new TransportadoraModel;
  constructor(private transportadoraService: transportadoraService) { }

  adicionarControl = true;

  setAdiconarControll(foo: boolean) {

    this.adicionarControl = foo;
    this.controlModal();

  }
  controlModal() {
    if (this.adicionarControl) {
      this.transportadoraForm.controls['Id'].setValue('');
      this.transportadoraForm.controls['Nome'].setValue('');
      this.transportadoraForm.controls['Cnpj'].setValue('');
      this.transportadoraForm.controls['Email'].setValue('');
    } else {
      this.transportadoraForm.controls['Id'].setValue(String(this.selectedRow.id));
      this.transportadoraForm.controls['Nome'].setValue(String(this.selectedRow.nome));
      this.transportadoraForm.controls['Cnpj'].setValue(String(this.selectedRow.cnpj));
      this.transportadoraForm.controls['Email'].setValue(String(this.selectedRow.email));
      this.transportadoraForm.controls['Ativado'].setValue(this.selectedRow.ativado||true);

    }
  }

  logs(row: TransportadoraModel) {
    this.selectedRow = row;
    // console.log(this.selectedRow);

  }
  ngOnInit(): void {
    this.listar();
    // console.log(this.dataSource)
  }

  transportadoraForm = new FormGroup({
    Id: new FormControl({ value: '', disabled: true }),
    Nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Cnpj: new FormControl('', [Validators.required, Validators.minLength(14)]),
    Email: new FormControl('', [Validators.required, Validators.email,Validators.minLength(3)]),
    Ativado: new FormControl(true, [Validators.required])

  })

  adicionar() {

    let transportadora = new TransportadoraModel;
    transportadora.nome = this.transportadoraForm.controls['Nome'].value || '';
    transportadora.cnpj = this.transportadoraForm.controls['Cnpj'].value || '';
    transportadora.email = this.transportadoraForm.controls['Email'].value || '';
    transportadora.ativado = this.transportadoraForm.controls['Ativado'].value || true;

    // console.log(produto);

    this.transportadoraService.salvar(transportadora).subscribe(transportadora => {
      this.listar()
      alert(transportadora.nome + " Gravado Com sucesso");
    });

  }

  listar() {
    this.transportadoraService.listar().subscribe({
      next: (produto) => this.dataSource = produto,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  alterar() {
    let transportadora = new TransportadoraModel;
    transportadora.id = Number(this.transportadoraForm.controls['Id'] || 0);
    transportadora.nome = this.transportadoraForm.controls['Nome'].value || '';
    transportadora.cnpj = this.transportadoraForm.controls['Cnpj'].value || '';
    transportadora.email = this.transportadoraForm.controls['Email'].value || '';
    transportadora.ativado = this.transportadoraForm.controls['Ativado'].value || true;

    // console.log(transportadora);

    this.transportadoraService.alterar(transportadora).subscribe(transportadora => {
      this.listar()
      alert(transportadora.nome + " Alterado Com sucesso");
    });

  }
}
