import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PendingApprovalsComponent } from './pending-approvals/pending-approvals.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PendingApprovalsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('x-api-training-front');
}
