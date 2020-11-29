import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/shared/model/guest.model';
import { GuestService } from 'src/app/shared/services/guest.service';

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
