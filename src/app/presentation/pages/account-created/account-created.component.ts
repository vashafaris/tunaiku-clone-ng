import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/data/model/guest.model';
import { GuestService } from 'src/app/data/services/guest.service';

@Component({
  selector: 'app-account-created',
  templateUrl: './account-created.component.html',
  styleUrls: ['./account-created.component.scss'],
})
export class AccountCreatedComponent implements OnInit {
  guest: Guest;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.guest = this.guestService.guest;
  }
}
