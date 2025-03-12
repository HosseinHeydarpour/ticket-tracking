import { Component, inject, input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ThemeDirectiveTsDirective } from '../directives/theme.directive';

/**
 * @fileoverview SidebarComponent is a standalone Angular component that provides navigation and user-specific information in the sidebar.
 * It dynamically reacts to route query parameters and ensures a default timeframe is set if none is provided.
 */

/**
 * @class SidebarComponent
 * @description
 * A standalone Angular component responsible for rendering the application's sidebar.
 * The sidebar includes timeframes, user-specific information (e.g., username and user avatar), and ensures a default timeframe is applied to the route.
 *
 * @implements {OnInit}
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ThemeDirectiveTsDirective, // A custom directive for applying theme-specific styles.
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  /**
   * @member {ActivatedRoute} activatedRoute
   * @description
   * An instance of the ActivatedRoute injected into the component.
   * Used to subscribe to route query parameters and react to changes dynamically.
   */
  activatedRoute = inject(ActivatedRoute);

  /**
   * @member {InputSignal<string>} username
   * @description
   * A required input signal specifying the username to be displayed in the sidebar.
   * This value is passed from app component and is used to personalize the sidebar.
   */
  username = input.required<string>();

  constructor(private router: Router) {}

  /**
   * @method ngOnInit
   * @description
   * Subscribes to route query parameters to ensure a default timeframe is set if none is provided.
   */
  ngOnInit(): void {
    // Subscribe to query parameters from the ActivatedRoute.
    this.activatedRoute.queryParams.subscribe({
      next: (params: Params) => {
        // Check if the `timeframe` query parameter is undefined.
        if (params['timeframe'] === undefined) {
          this.router.navigate([], {
            queryParams: { timeframe: 'daily' }, // Set the default timeframe to 'daily'.
          });
        }
      },
    });
  }
}
