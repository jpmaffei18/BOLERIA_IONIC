import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },
      
      {
        path: 'formulario',
        loadChildren: () => import('../../formulario/formulario.module').then( m => m.FormularioPageModule)
      },
      {
        path: '',
        redirectTo: '/footer/home',
        pathMatch: 'full'
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterRoutingModule { }
