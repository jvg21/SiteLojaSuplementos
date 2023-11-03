import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/Pages/Layout/layout/layout.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { ProdutoListComponent } from './Components/Pages/Produto/produto-list/produto-list.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { FooterComponent } from './Components/Pages/Layout/footer/footer.component';

const routes: Routes = [
  {path:"",redirectTo:"navegar",pathMatch: 'full'},
  {path:"navegar",component:LayoutComponent,children:[
    {path:"",component:HomePageComponent}
  ]},
  {path:"adm",redirectTo:"",pathMatch:'full'},

  {path:"PageNotFound",component:ErrorPageComponent},
  {path:'**' , pathMatch:'full', redirectTo:"PageNotFound"}

  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
