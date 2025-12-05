import { Component } from '@angular/core';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';

@Component({
  selector: 'app-root',
  imports: [OrdersListComponent],
  template: `<app-orders-list />`,
  styleUrl: './app.css',
})
export class App {}
