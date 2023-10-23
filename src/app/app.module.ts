import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { ProdutoViewComponent } from './Components/Pages/Produto/produto-view/produto-view.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';
import { CardComponent } from './Components/Cards/card/card.component';
import { CardDisplayComponent } from './Components/Cards/card-display/card-display.component';
import { AdminComponent } from './Components/Pages/User/admin/admin.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';

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
    CadastroComponent,
    CardComponent,
    CardDisplayComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
