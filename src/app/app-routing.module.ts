import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { ProdutoViewComponent } from './Components/Pages/Produto/produto-view/produto-view.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';
import { AdminComponent } from './Components/Pages/User/admin/admin.component';
import { UserCrudComponent } from './Components/Pages/User/user-crud/user-crud.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent, children: [
      {path:'',component:HomePageComponent},
      {path:'home',component:HomePageComponent},
      {path:'produtoView',component:ProdutoViewComponent},
      {path:'login',component:LoginComponent},
      {path:'cadastro',component:CadastroComponent},
      {path:'usercrud',component:UserCrudComponent}
    ]
  },
  {path:'adm',component:AdminComponent, children:[
      {path:'adm/produtos',component:LoginComponent}
  ]},
  
  {path:'**' , pathMatch:'full', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
