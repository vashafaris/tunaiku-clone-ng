import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateAccountComponent } from './create-account.component';
import { TabType } from './create-account.enum';

import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';
import { Loan } from 'src/app/shared/model/loan.model';
import { LoanService } from 'src/app/shared/services/loan.store';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<CreateAccountComponent>;
  let loanService: LoanService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  let mockLoan: Loan = {
    loanValue: 2,
    loanDuration: 9,
    debt: 340336,
    isCoveredArea: null,
    name: '',
    nik: '',
    phone: '',
    discover: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, MSiteWrapperModule],
      declarations: [CreateAccountComponent],
      providers: [{ provide: Router, useValue: routerSpy }, LoanService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    loanService = TestBed.get(LoanService);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get loan data', async(() => {
    loanService.data.subscribe(loan => {
      fixture.detectChanges();
      expect(loan).toEqual(mockLoan);
    });
  }));

  it('should display correct loan value', () => {
    const loanValueDisplay = de.nativeElement.querySelector(
      '#card-pinjaman__text__loan-value',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(loanValueDisplay.innerHTML).toBe(' Rp 2 Juta ');
  });

  it('should display correct loan duration', () => {
    const loanDurationDisplay = de.nativeElement.querySelector(
      '#card-pinjaman__text__loan-duration',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(loanDurationDisplay.innerHTML).toBe(' 9 Bulan ');
  });

  it('should display correct debt value', () => {
    const debtValueDisplay = de.nativeElement.querySelector(
      '#card-pinjaman__text__debt-value',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(debtValueDisplay.innerHTML).toBe(' Rp 340,336 ');
  });

  it('should change selectedTab property when tabHandler is called', () => {
    const mockSelectedTab = TabType.CreateAccount;
    component.selectedTab = mockSelectedTab;

    component.tabHandler(TabType.SignIn);

    expect(component.selectedTab).toBe(TabType.SignIn);
  });

  it('should call loanService methods and navigate when onSubmit is called', () => {
    const setNameSpy = spyOn(loanService, 'setName');
    const setNikSpy = spyOn(loanService, 'setNik');
    const setPhoneSpy = spyOn(loanService, 'setPhone');
    const setDiscoverSpy = spyOn(loanService, 'setDiscover');

    component.onSubmit();

    expect(setNameSpy).toHaveBeenCalled();
    expect(setNikSpy).toHaveBeenCalled();
    expect(setPhoneSpy).toHaveBeenCalled();
    expect(setDiscoverSpy).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith([
      '/loan',
      'account-created',
    ]);
  });
});
