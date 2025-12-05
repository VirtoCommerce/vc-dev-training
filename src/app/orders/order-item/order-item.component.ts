import { Component, input, output } from '@angular/core';
import type { OrderItemType } from '../types';

@Component({
  selector: 'app-order-item',
  standalone: true,
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css',
})
export class OrderItemComponent {
  readonly order = input.required<OrderItemType>();
  readonly approve = output<string>();
  readonly reject = output<string>();

  onApprove() {
    this.approve.emit(this.order().id);
  }

  onReject() {
    this.reject.emit(this.order().id);
  }
}
