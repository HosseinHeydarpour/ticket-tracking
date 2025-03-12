import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ReportCardComponent } from './shared/report-card/report-card.component';
import { TicketService } from './core/services/ticket.service';
import { Ticket } from './shared/models/ticket.model';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, ReportCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ticketService = inject(TicketService);
  tickets = signal<Ticket[]>([]);

  ngOnInit(): void {
    this.tickets.set(this.ticketService.tickets);
  }
}
