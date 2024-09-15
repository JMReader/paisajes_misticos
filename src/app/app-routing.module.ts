import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent }, 
  { path: 'maquinaria', component: ProductsComponent },
  { path: '**', pathMatch:'full',redirectTo:'landing' }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
