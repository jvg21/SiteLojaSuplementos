import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDisplayComponent } from './components/Card-display/card-display.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { CadastroComponent } from './components/Cliente/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/view/produto.component';



const routes: Routes = [
  //{ path: 'layout', component: LayoutComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:'', component:CardDisplayComponent },
      {path: 'login',component:LoginComponent},
      {path: 'Cadastro',component:CadastroComponent},
      {path: 'produto',component:ProdutoComponent}
      


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
