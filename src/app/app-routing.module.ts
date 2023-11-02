import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { ProdutoListComponent } from './Components/Pages/Produto/produto-list/produto-list.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { LayoutComponent } from './Components/Pages/Layout/layout/layout.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent, children: [
      {path:'',component:HomePageComponent},
      {path:'home',component:HomePageComponent},
      {path:'login',component:LoginComponent},
      {path:'/produtoslist',component:ProdutoListComponent}
    ]
  },
  {path:'**' , pathMatch:'full', component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
