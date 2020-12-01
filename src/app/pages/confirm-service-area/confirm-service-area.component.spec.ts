import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterTestingModule } from '@angular/router/testing';
import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';

import { ConfirmServiceAreaComponent } from './confirm-service-area.component';

describe('ConfirmServiceAreaComponent', () => {
  let component: ConfirmServiceAreaComponent;
  let fixture: ComponentFixture<ConfirmServiceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MSiteWrapperModule,
        MatRadioModule,
      ],
      declarations: [ConfirmServiceAreaComponent],
    }).compileComponents();
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
