import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ReportCardComponent } from './shared/report-card/report-card.component';
import { TicketService } from './core/services/ticket.service';
import { Ticket } from './shared/models/ticket.model';

import { CommonModule, DOCUMENT } from '@angular/common';
import { ThemeService } from './core/services/theme.service';
import { ThemesiwtcherComponent } from './shared/themesiwtcher/themesiwtcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent, // A component providing the sidebar functionality.
    ReportCardComponent, // A shared component for displaying report cards.
    CommonModule, // Angular's common directives like ngIf, ngFor, etc.
    ThemesiwtcherComponent, // A shared component for switching themes.
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /**
   * @member {TicketService} ticketService
   * @description
   * An instance of the TicketService injected into the component.
   * Used to retrieve and manage ticket-related data.
   */
  ticketService = inject(TicketService);

  /**
   * @member {Signal<Ticket[]>} tickets
   * @description
   * A reactive signal holding an array of Ticket objects.
   * This signal is updated with data from the TicketService during initialization.
   */
  tickets = signal<Ticket[]>([]);

  themeService = inject(ThemeService); // Inejecting theme service into app service

  /**
   * @member {Document} document
   * @description
   * A reference to the global `document` object, injected using Angular's `DOCUMENT` token.
   * Used to manipulate the DOM, such as adding a theme class to the body element.
   */
  document = inject(DOCUMENT);

  /**
   * @method ngOnInit
   * @description
   * lifecycle hook called once when the component is initialized.
   * Sets the initial ticket data and applies the selected theme to the document body.
   */
  ngOnInit(): void {
    this.tickets.set(this.ticketService.tickets); // Set the tickets signal with data from the TicketService.

    this.document.body.classList.add(this.themeService.theme()); // Add the current theme class to the document body.
  }
}
