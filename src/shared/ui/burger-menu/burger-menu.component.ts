import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-burger-menu',
  standalone: false,
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css',
})
export class BurgerMenuComponent implements OnInit {
  @Input() initialState = false;
  @Input() closed?: Observable<void>;
  @Output() trigger = new EventEmitter<void>();

  public active = false;

  public ngOnInit(): void {
    this.active = this.initialState || false;

    if (this.closed) {
      this.closed.subscribe(() => (this.active = false));
    }
  }

  public triggered() {
    this.active = !this.active;
    this.trigger.emit();
  }
}
