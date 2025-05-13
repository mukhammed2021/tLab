import { Component, inject, OnDestroy, signal } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 992px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    if (this._mobileQuery.addEventListener) {
      this._mobileQuery.addEventListener('change', this._mobileQueryListener);
    } else {
      this._mobileQuery.addListener(this._mobileQueryListener);
    }
  }

  public title = 'tlab';

  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  public ngOnDestroy(): void {
    if (this._mobileQuery.removeEventListener) {
      this._mobileQuery.removeEventListener(
        'change',
        this._mobileQueryListener,
      );
    } else {
      this._mobileQuery.removeListener(this._mobileQueryListener);
    }
  }
}
