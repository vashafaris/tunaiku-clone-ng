import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

import { Loan } from 'src/app/shared/model/loan.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() loan: Loan;
  @Output()
  loanValueSliderChange: EventEmitter<MatSliderChange> = new EventEmitter();
  @Output()
  loanDurationSliderChange: EventEmitter<MatSliderChange> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onLoanValueChange(event: MatSliderChange) {
    this.loanValueSliderChange.emit(event);
  }

  onLoanDurationChange(event: MatSliderChange) {
    this.loanDurationSliderChange.emit(event);
  }
}
