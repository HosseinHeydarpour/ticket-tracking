import { Component } from '@angular/core';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ReportCardComponent } from './shared/report-card/report-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, ReportCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ticket-tracking';
}
