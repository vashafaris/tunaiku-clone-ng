import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountCreatedComponent } from './account-created.component';

import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';
import { Loan } from 'src/app/shared/model/loan.model';
import { LoanService } from 'src/app/shared/services/loan.store';

describe('AccountCreatedComponent', () => {
  let component: AccountCreatedComponent;
  let fixture: ComponentFixture<AccountCreatedComponent>;
  let de: DebugElement;
  let loanService: LoanService;

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
      imports: [RouterTestingModule, MSiteWrapperModule],
      declarations: [AccountCreatedComponent],
      providers: [LoanService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreatedComponent);
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

  it('should display correct name', () => {
    const nameDisplay = de.nativeElement.querySelector(
      '#success__info-item__name',
    );
    const mockLoanName = {
      ...mockLoan,
      name: 'Vasha',
    };
    component.loan = mockLoanName;

    fixture.detectChanges();

    expect(nameDisplay.innerHTML).toBe('Vasha');
  });

  it('should display correct loan value', () => {
    const loanValueDisplay = de.nativeElement.querySelector(
      '#success__info-item__loan-value',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(loanValueDisplay.innerHTML).toBe(' 2 Juta ');
  });

  it('should display correct loan duration', () => {
    const loanDurationDisplay = de.nativeElement.querySelector(
      '#success__info-item__loan-duration',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(loanDurationDisplay.innerHTML).toBe(' 9 Bulan ');
  });
});
