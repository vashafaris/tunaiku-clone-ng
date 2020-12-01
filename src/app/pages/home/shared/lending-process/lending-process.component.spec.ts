import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingProcessComponent } from './lending-process.component';

describe('LendingProcessComponent', () => {
  let component: LendingProcessComponent;
  let fixture: ComponentFixture<LendingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
