import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { ProdutoViewComponent } from './Components/Pages/Produto/produto-view/produto-view.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ErrorPageComponent,
    ProdutoViewComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
