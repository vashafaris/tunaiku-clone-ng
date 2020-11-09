import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  form: FormGroup;

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

    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      nik: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      source: new FormControl(null, Validators.required),
    });
  }

  tabHandler(tab: string) {
    this.selectedTab = tab;
  }

  updateName() {
    console.log('ok');
  }

  onSubmit() {
    console.log('ok');
    console.log(this.form);
  }
}
