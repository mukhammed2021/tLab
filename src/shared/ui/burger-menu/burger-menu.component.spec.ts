import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenuComponent } from './burger-menu.component';

describe('BurgerMenuComponent', () => {
  let component: BurgerMenuComponent;
  let fixture: ComponentFixture<BurgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
