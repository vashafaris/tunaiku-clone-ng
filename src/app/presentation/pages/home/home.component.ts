import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loanValue: number = 2;
  loanDuration: number = 9;
  interest: number = 1.531512000001532;
  total: number = 340000;

  loanForm = new FormGroup({
    amount: new FormControl(2),
    duration: new FormControl(9),
  });
  constructor() {}

  ngOnInit(): void {}

  onValueChange(event: any): void {
    this.loanValue = event.value;
    this.total =
      ((this.loanValue * 1000000) / this.loanDuration) * this.interest;
  }

  onDurationChange(event: any): void {
    this.loanDuration = event.value;
    this.total =
      ((this.loanValue * 1000000) / this.loanDuration) * this.interest;
  }
}
