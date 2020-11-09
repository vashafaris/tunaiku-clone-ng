import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Guest } from 'src/app/data/model/guest.model';
import { GuestService } from 'src/app/data/services/guest.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  selectedTab = 'create-account';

  guest: Guest;

  accountForm = new FormGroup({
    name: new FormControl(''),
    nik: new FormControl(''),
    phone: new FormControl(''),
    source: new FormControl(''),
  });

  signInForm = new FormGroup({
    phone: new FormControl(''),
  });

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.guest = this.guestService.guest;
  }

  tabHandler(tab: string) {
    this.selectedTab = tab;
  }
}
