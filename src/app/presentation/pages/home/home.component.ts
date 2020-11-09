import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Guest } from 'src/app/data/model/guest.model';
import { GuestService } from 'src/app/data/services/guest.service';

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

  guest: Guest;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.guest = this.guestService.guest;
  }

  onValueChange(event: any): void {
    this.guest.loanValue = event.value;
    this.guest.debt =
      ((this.guest.loanValue * 1000000) / this.guest.loanDuration) *
      this.interest;
  }

  onDurationChange(event: any): void {
    this.guest.loanDuration = event.value;
    this.guest.debt =
      ((this.guest.loanValue * 1000000) / this.guest.loanDuration) *
      this.interest;
  }
}
