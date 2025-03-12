import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = signal<'light' | 'dark'>('dark');

  public theme = this._theme.asReadonly();

  changeTheme() {
    if (this.theme() === 'light') {
      this._theme.set('dark');
    } else {
      this._theme.set('light');
    }
  }
}
