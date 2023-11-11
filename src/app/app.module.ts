import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//angular materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';


//components
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/Pages/Layout/layout/layout.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { ProdutoListComponent } from './Components/Pages/Produto/produto-list/produto-list.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';
import { NavbarComponent } from './Components/Pages/Layout/navbar/navbar.component';
import { FooterComponent } from './Components/Pages/Layout/footer/footer.component';
import { ProdutoSpecComponent } from './Components/Pages/Produto/produto-spec/produto-spec.component';
import { TransportadoraListComponent } from './Components/Pages/Transportadora/transportadora-list/transportadora-list.component';
import { CarrinhoComponent } from './Components/Pages/carrinho/carrinho.component';
import { CardComponent } from './Components/card/card.component';
import { ProdutoSearchComponent } from './Components/Pages/Produto/produto-search/produto-search.component';
import { PedidoComponent } from './Components/Pages/pedido/pedido.component';
import { UserListComponent } from './Components/Pages/User/user-list/user-list.component';
import { LayoutAdmComponent } from './Components/Pages/layout-adm/layout-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorPageComponent,
    HomePageComponent,
    LoginComponent,
    ProdutoListComponent,
    CadastroComponent,
    NavbarComponent,
    FooterComponent,
    ProdutoSpecComponent,
    TransportadoraListComponent,
    CarrinhoComponent,
    CardComponent,
    ProdutoSearchComponent,
    PedidoComponent,
    UserListComponent,
    LayoutAdmComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
