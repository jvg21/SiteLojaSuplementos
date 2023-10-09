import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/Card-display/Card/card.component';
import { MenuComponent } from './components/Layout/Menu/menu.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { CardDisplayComponent } from './components/Card-display/card-display.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/Cliente/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    LayoutComponent,
    FooterComponent,
    CardDisplayComponent,
    LoginComponent,
    CadastroComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule, MatButtonModule, MatIconModule,MatListModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
