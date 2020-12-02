import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesAndFeesComponent } from './rates-and-fees.component';

describe('RatesAndFeesComponent', () => {
  let component: RatesAndFeesComponent;
  let fixture: ComponentFixture<RatesAndFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesAndFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesAndFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
