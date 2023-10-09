import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDisplayComponent } from './components/Card-display/card-display.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { CadastroComponent } from './components/Cliente/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/view/produto.component';
import { ErrorPageComponent } from './ErrorPage/error-page/error-page.component';



const routes: Routes = [
  //{ path: 'layout', component: LayoutComponent },
  {

    path: 'crudproduto', component: LayoutComponent,
    children: [
      { path: 'inserir', component: CadastroComponent }
      // {path:'excluir',component}
      // {path:'alterar',component}

    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CardDisplayComponent },
      { path: 'login', component: LoginComponent },
      { path: 'Cadastro', component: CadastroComponent },
      { path: 'produto', component: ProdutoComponent },

    ]
  },
  { path: '**', pathMatch: 'full',component:ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
