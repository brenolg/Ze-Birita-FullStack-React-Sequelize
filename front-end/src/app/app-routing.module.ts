import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import { AccessComponent } from './pages/access/access.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: AccessComponent },
  { path: 'register', component: AccessComponent },
  { path: ':role/orders', component: OrdersComponent },
  { path: ':role/orders/:id', component: OrdersComponent },
  { path: ':role/products', component: ProductsComponent },
  { path: 'customer/checkout', component: CheckoutComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}