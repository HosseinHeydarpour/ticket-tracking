
import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

/**
 * @fileoverview ThemesiwtcherComponent provides functionality for switching between light and dark themes in the application.
 * It manages the state of the theme switcher and updates the document's body class to reflect the current theme.
 */


/**
 * @class ThemesiwtcherComponent
 * @description
 * A standalone Angular component responsible for toggling the application's theme between light and dark modes.
 * It uses a reactive signal to track the toggle state and interacts with the ThemeService to manage theme changes.
 */
@Component({
  selector: 'app-themesiwtcher',
  standalone: true,
  imports: [],
  templateUrl: './themesiwtcher.component.html',
  styleUrl: './themesiwtcher.component.scss',
})
export class ThemesiwtcherComponent {
  /**
   * @member {Signal<boolean>} isActive
   * @description
   * A reactive signal indicating whether the theme switcher is active (toggled on or off).
   * This signal is updated when the user interacts with the theme switcher.
   */
  isActive = signal<boolean>(false);

  themeService = inject(ThemeService); // Injecting theme service into the component

  /**
   * @member {Document} document
   * @description
   * A reference to the global `document` object, injected using Angular's `DOCUMENT` token.
   */
  document = inject(DOCUMENT);

  /**
   * @method onToggleswitchClicked
   * @description
   * Handles the click event on the theme toggle switch.
   * - Toggles the `isActive` signal to reflect the new state.
   * - Triggers a theme change via the ThemeService.
   * - Updates the document's body class to apply the new theme and remove the previous one.
   */
  onToggleswitchClicked() {
    // Toggle the isActive signal between true and false.
    this.isActive.update((value) => !value);

    // Change the theme using the ThemeService.
    this.themeService.changeTheme();

    // Remove existing theme classes ('light' and 'dark') from the document body.
    this.document.body.classList.remove('light', 'dark');

    // Add the current theme class to the document body.
    this.document.body.classList.add(this.themeService.theme());
  }
}
