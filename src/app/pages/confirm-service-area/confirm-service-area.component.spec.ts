import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';
import { LoanService } from 'src/app/shared/services/loan.store';

import { ConfirmServiceAreaComponent } from './confirm-service-area.component';

describe('ConfirmServiceAreaComponent', () => {
  let component: ConfirmServiceAreaComponent;
  let fixture: ComponentFixture<ConfirmServiceAreaComponent>;
  let loanService: LoanService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MSiteWrapperModule,
        MatRadioModule,
      ],
      declarations: [ConfirmServiceAreaComponent],
      providers: [{ provide: Router, useValue: routerSpy }, LoanService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmServiceAreaComponent);
    loanService = TestBed.get(LoanService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loanService methods and navigate when onSubmit is called', () => {
    const setIsCoveredAreaSpy = spyOn(loanService, 'setIsCoveredArea');

    component.onSubmit();

    expect(setIsCoveredAreaSpy).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith([
      '/loan',
      'create-account',
    ]);
  });
});
