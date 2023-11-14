import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/Pages/Layout/layout/layout.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';
import { ProdutoListComponent } from './Components/Pages/Produto/produto-list/produto-list.component';
import { ProdutoSpecComponent } from './Components/Pages/Produto/produto-spec/produto-spec.component';
import { TransportadoraListComponent } from './Components/Pages/Transportadora/transportadora-list/transportadora-list.component';
import { CarrinhoComponent } from './Components/Pages/carrinho/carrinho.component';
import { ProdutoSearchComponent } from './Components/Pages/Produto/produto-search/produto-search.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { UserListComponent } from './Components/Pages/User/user-list/user-list.component';
import { PedidoComponent } from './Components/Pages/pedido/pedido.component';
import { LayoutAdmComponent } from './Components/Pages/Layout/layout-adm/layout-adm.component';
import { UpdateCadastroComponent } from './Components/Pages/User/update-cadastro/update-cadastro.component';


const routes: Routes = [
  {path:"",redirectTo:"navegar",pathMatch: 'full'},
  {path:"navegar",component:LayoutComponent,children:[
    {path:"",component:HomePageComponent},
    {path:"login",component:LoginComponent},
    {path:"cadastro",component:CadastroComponent},
    {path:"produto-spec/:id",component:ProdutoSpecComponent},
    {path:"carrinho", component:CarrinhoComponent},
    {path:"produto-search", component:ProdutoSearchComponent},
    {path:"pedidos",component:PedidoComponent},
    {path:"updatecadastro",component:UpdateCadastroComponent}
  ]},
  {path:"adm",component:LayoutAdmComponent,children:[
    {path:"produto",component:ProdutoListComponent},
    {path:"transportadora",component:TransportadoraListComponent},
    {path:"usuario",component:UserListComponent}
  ]},

  {path:'PageNotFound' , component:ErrorPageComponent},
  {path:'**' , pathMatch:'full', redirectTo:"PageNotFound"}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
