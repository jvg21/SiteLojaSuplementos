import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'CardComponent', component: CardComponent },
      { path: 'LayoutComponent', component: LayoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
