import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-themesiwtcher',
  standalone: true,
  imports: [],
  templateUrl: './themesiwtcher.component.html',
  styleUrl: './themesiwtcher.component.scss',
})
export class ThemesiwtcherComponent {
  isActive = signal<boolean>(false);
  themeService = inject(ThemeService);
  document = inject(DOCUMENT);

  onToggleswitchClicked() {
    this.isActive.update((value) => !value);
    this.themeService.changeTheme();
    this.document.body.classList.remove('light', 'dark');
    this.document.body.classList.add(this.themeService.theme());
  }
}
