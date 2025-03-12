import { Injectable } from '@angular/core';
import { TICKETS } from '../../tickets';
import { Ticket } from '../../shared/models/ticket.model';

/**
 * @fileoverview TicketService is a service responsible for managing and providing ticket data across the application.
 * It acts as a centralized source for ticket-related information, ensuring consistency and reusability.
 */

/**
 * @class TicketService
 * @description
 * A service provided in the root injector that manages ticket data.
 * It provides access to a predefined list of tickets and exposes methods or properties to retrieve this data.
 *
 * @decorator Injectable
 * @memberof TicketService
 * @property {Ticket[]} ticketsArr - An array of Ticket objects representing the available tickets.
 */
@Injectable({
  providedIn: 'root', // Makes the service available application-wide as a singleton.
})
export class TicketService {
  /**
   * @member {Ticket[]} ticketsArr
   * @description
   * An array of Ticket objects initialized with predefined ticket data from `TICKETS`.
   * This array serves as the source of truth for ticket-related information in the application.
   */
  ticketsArr: Ticket[] = TICKETS;

  /**
   * @method tickets
   * @description
   * A getter method that provides read-only access to the `ticketsArr` array.
   * Ensures encapsulation by preventing direct modification of the internal ticket data.
   *
   * @returns {Ticket[]} - The array of Ticket objects representing the available tickets.
   */
  get tickets(): Ticket[] {
    return this.ticketsArr;
  }
}
