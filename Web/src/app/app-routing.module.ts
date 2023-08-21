import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './Card/card.component';
import { MenuComponent } from './Menu/menu.component';

const routes: Routes = [
  { path: 'CardLink', component: CardComponent },
  { path: 'MenuLink', component: MenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
