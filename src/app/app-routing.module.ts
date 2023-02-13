import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundPageComponent } from './pagenotfound-page/pagenotfound-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'admin/add', component: AddEventPageComponent },

  { path: '**', component: PagenotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
