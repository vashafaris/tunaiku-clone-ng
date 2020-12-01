import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TabType } from './create-account.enum';
import { Loan } from 'src/app/shared/model/loan.model';
import { LoanService } from 'src/app/shared/services/loan.store';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  public tabType: typeof TabType = TabType;
  selectedTab: TabType = TabType.CreateAccount;

  loan: Loan;
  createAccountForm: FormGroup;
  signInForm: FormGroup;

  constructor(private loanService: LoanService, private router: Router) {}

  ngOnInit(): void {
    this.loanService.data.subscribe(loan => {
      this.loan = loan;
    });

    this.createAccountForm = new FormGroup({
      name: new FormControl(this.loan.name, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(50),
      ]),
      nik: new FormControl(this.loan.nik, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      phone: new FormControl(this.loan.phone, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(9),
        Validators.maxLength(12),
      ]),
      discover: new FormControl(this.loan.discover, Validators.required),
    });

    this.signInForm = new FormGroup({
      phone: new FormControl(''),
    });
  }

  tabHandler(tab: TabType) {
    this.selectedTab = tab;
  }

  onSubmit(): void {
    this.loanService.setName(this.createAccountForm.get('name').value);
    this.loanService.setNik(this.createAccountForm.get('nik').value);
    this.loanService.setPhone(this.createAccountForm.get('phone').value);
    this.loanService.setDiscover(this.createAccountForm.get('discover').value);
    this.router.navigate(['/loan', 'account-created']);
  }
}
