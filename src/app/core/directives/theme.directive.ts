import {
  Directive,
  effect,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Directive({
  selector: '[appTheme]',
  standalone: true,
})
export class ThemeDirectiveTsDirective {
  themeService = inject(ThemeService);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() {
    console.log('HELLO');
    effect(() => {
      const currentTheme = this.themeService.theme(); // Access the current value of the signal
      this.updateClasses(currentTheme);
    });
  }

  private updateClasses(theme: string): void {
    // Remove all existing theme-related classes
    this.renderer.removeClass(this.el.nativeElement, 'light');
    this.renderer.removeClass(this.el.nativeElement, 'dark');

    // Add the appropriate class based on the current theme
    if (theme === 'light') {
      this.renderer.addClass(this.el.nativeElement, 'light');
    } else if (theme === 'dark') {
      this.renderer.addClass(this.el.nativeElement, 'dark');
    }
  }
}
