import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MNavbarModule } from '../m-navbar/m-navbar.module';

import { MSiteWrapperComponent } from './m-site-wrapper.component';

describe('MSiteWrapperComponent', () => {
  let component: MSiteWrapperComponent;
  let fixture: ComponentFixture<MSiteWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MNavbarModule],
      declarations: [MSiteWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSiteWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
