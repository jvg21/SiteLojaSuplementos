import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/Pages/Layout/layout/layout.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';

const routes: Routes = [
  {path:"",redirectTo:"navegar",pathMatch: 'full'},
  {path:"navegar",component:LayoutComponent,children:[
    {path:"",component:HomePageComponent},
    {path:"login",component:LoginComponent},
    {path:"cadastro",component:CadastroComponent},
  ]},
  {path:"adm",redirectTo:"",pathMatch:'full'},

  {path:'**' , pathMatch:'full', redirectTo:"PageNotFound"}

  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
