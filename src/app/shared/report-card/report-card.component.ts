import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Ticket } from './models/ticket.model';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss',
})
export class ReportCardComponent implements OnInit {
  cardType = input.required<string>();
  ticketData = input.required<Ticket>();
  activatedRoute = inject(ActivatedRoute);
  timeframe = signal<string>('Daily');
  onDestroy = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        if (params['timeframe']) {
          this.timeframe.set(params['timeframe']);
        }
        console.log(this.timeframe());
      },
    });

    this.onDestroy.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
