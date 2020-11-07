import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmServiceAreaComponent } from './confirm-service-area.component';

describe('ConfirmServiceAreaComponent', () => {
  let component: ConfirmServiceAreaComponent;
  let fixture: ComponentFixture<ConfirmServiceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmServiceAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
