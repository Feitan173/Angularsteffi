import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "inicio",
    component: InicioComponent
  },
  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'error',
    component:ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
