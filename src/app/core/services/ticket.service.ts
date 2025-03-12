import { Injectable } from '@angular/core';
import { TICKETS } from '../../tickets';
import { Ticket } from '../../shared/report-card/models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  ticketsArr: Ticket[] = TICKETS;

  get tickets() {
    return this.ticketsArr;
  }
}
