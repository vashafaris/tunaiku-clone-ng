import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

import { Loan } from 'src/app/shared/model/loan.model';
import { LoanService } from 'src/app/shared/services/loan.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loan: Loan;

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanService.data.subscribe(loan => {
      this.loan = loan;
    });
  }

  onLoanValueChange(event: MatSliderChange): void {
    this.loanService.setLoanValue(event.value);
    this.loanService.calculateDebt();
  }

  onLoanDurationChange(event: MatSliderChange): void {
    this.loanService.setLoanDuration(event.value);
    this.loanService.calculateDebt();
  }
}
