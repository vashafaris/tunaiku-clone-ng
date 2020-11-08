import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  selectedTab = 'create-account';

  accountForm = new FormGroup({
    name: new FormControl(''),
    nik: new FormControl(''),
    phone: new FormControl(''),
    source: new FormControl(''),
  });

  signInForm = new FormGroup({
    phone: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  tabHandler(tab: string) {
    this.selectedTab = tab;
  }
}
