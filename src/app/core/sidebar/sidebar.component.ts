import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ThemeDirectiveTsDirective } from '../directives/theme.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeDirectiveTsDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (params: Params) => {
        if (params['timeframe'] === '') {
          this.router.navigate([], {
            queryParams: { timeframe: 'Daily' },
          });
        }
      },
    });
  }
}
