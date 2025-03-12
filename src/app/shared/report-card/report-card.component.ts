import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ThemeDirectiveTsDirective } from '../../core/directives/theme.directive';

/**
 * @fileoverview ReportCardComponent is a standalone Angular component that displays ticket data in a report card format.
 * It supports dynamic inputs for card type and ticket data, and reacts to route query parameters to adjust the displayed timeframe.
 */

/**
 * @class ReportCardComponent
 * @description
 * A standalone Angular component responsible for rendering a report card based on provided ticket data and card type.
 * It dynamically responds to query parameters from the ActivatedRoute to update the displayed timeframe.
 *
 * @implements {OnInit}
 */

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [TitleCasePipe, ThemeDirectiveTsDirective],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss',
})
export class ReportCardComponent implements OnInit {
  /**
   * @member {InputSignal<string>} cardType
   * @description
   * A required input signal specifying the type of the report card (e.g., "summary", "details").
   * This value determines how the report card is styled or structured.
   */
  cardType = input.required<string>();

  /**
   * @member {InputSignal<Ticket>} ticketData
   * @description
   * A required input signal containing the ticket data to be displayed in the report card.
   * This data includes details about the ticket, such as its title, status, and other relevant information.
   */
  ticketData = input.required<Ticket>();

  /**
   * @member {ActivatedRoute} activatedRoute
   * @description
   * An instance of the ActivatedRoute injected into the component.
   * Used to subscribe to route query parameters and dynamically update the component's state.
   */
  activatedRoute = inject(ActivatedRoute);

  /**
   * @member {Signal<string>} timeframe
   * @description
   * A reactive signal holding the current timeframe for the report card (e.g., "Daily", "Weekly").
   * This value is updated based on query parameters from the route.
   */
  timeframe = signal<string>('daily');

  /**
   * @member {DestroyRef} onDestroy
   * @description
   * An instance of DestroyRef injected into the component.
   * Used to clean up subscriptions when the component is destroyed, preventing memory leaks.
   */
  onDestroy = inject(DestroyRef);

  /**
   * @method ngOnInit
   * @description
   * A lifecycle hook called once when the component is initialized.
   * Subscribes to route query parameters to update the `timeframe` signal dynamically.
   * Ensures proper cleanup of the subscription using the `onDestroy` lifecycle hook.
   */
  ngOnInit(): void {
    // Subscribe to query parameters from the ActivatedRoute.
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        // Update the `timeframe` signal if the `timeframe` query parameter exists.
        if (params['timeframe']) {
          this.timeframe.set(params['timeframe']);
        }
        console.log(this.timeframe()); // Log the current timeframe for debugging purposes.
      },
    });

    // Cleanup the subscription when the component is destroyed.
    this.onDestroy.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
