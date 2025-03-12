import { Component, inject, input, OnInit } from '@angular/core';
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

  username = input.required<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (params: Params) => {
        console.log(params);
        if (params['timeframe'] === undefined) {
          this.router.navigate([], {
            queryParams: { timeframe: 'daily' },
          });
        }
      },
    });
  }
}
