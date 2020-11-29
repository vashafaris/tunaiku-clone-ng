import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/shared/model/guest.model';
import { GuestService } from 'src/app/shared/services/guest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  interest: number = 1.531512000001532;

  guest: Guest;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.guest = this.guestService.guest;
  }

  onValueChange(event: any): void {
    this.guest.loanValue = event.value;
    this.guest.debt = Math.ceil(
      ((this.guest.loanValue * 1000000) / this.guest.loanDuration) *
        this.interest
    );
  }

  onDurationChange(event: any): void {
    this.guest.loanDuration = event.value;
    this.guest.debt = Math.ceil(
      ((this.guest.loanValue * 1000000) / this.guest.loanDuration) *
        this.interest
    );
  }
}
