import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  //{ path: 'layout', component: LayoutComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:'', component:CardDisplayComponent },
      {path: 'login',component:LoginComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
