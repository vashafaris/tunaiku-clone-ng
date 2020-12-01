import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';
import { Loan } from 'src/app/shared/model/loan.model';
import { LoanService } from 'src/app/shared/services/loan.store';

import { AccountCreatedComponent } from './account-created.component';

describe('AccountCreatedComponent', () => {
  let component: AccountCreatedComponent;
  let fixture: ComponentFixture<AccountCreatedComponent>;
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
});
