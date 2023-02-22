import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundPageComponent } from './pagenotfound-page/pagenotfound-page.component';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '', component: HomePageComponent},
  { path: 'add', component: AddEventPageComponent },
  { path: 'edit/:id', component: AddEventPageComponent },
  { path: '**', component: PagenotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
