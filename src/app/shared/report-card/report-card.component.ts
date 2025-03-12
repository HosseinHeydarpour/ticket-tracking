import { Component } from '@angular/core';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss'
})
export class ReportCardComponent {

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
