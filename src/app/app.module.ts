import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/Pages/Layout/layout/layout.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { ProdutoListComponent } from './Components/Pages/Produto/produto-list/produto-list.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';
import { NavbarComponent } from './Components/Pages/Layout/navbar/navbar.component';
import { FooterComponent } from './Components/Pages/Layout/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
