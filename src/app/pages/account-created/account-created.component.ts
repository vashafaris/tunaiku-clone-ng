import { Component, OnInit } from '@angular/core';

import { Loan } from 'src/app/shared/model/loan.model';
import { LoanService } from 'src/app/shared/services/loan.store';

@Component({
  selector: 'app-account-created',
  templateUrl: './account-created.component.html',
  styleUrls: ['./account-created.component.scss'],
})
export class AccountCreatedComponent implements OnInit {
  loan: Loan;

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanService.data.subscribe(loan => {
      this.loan = loan;
    });
  }
}
