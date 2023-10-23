import { Component } from '@angular/core';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent {
  displayedColumns: string[] = ['Login','Nome'];
  dataSource = [{login: 'cleverson', nome:'Cleverson Avelino ', email: 'cleversonavelino@gmail.com'}];
}
