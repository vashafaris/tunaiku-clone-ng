import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private guestService: GuestService, private router: Router) {}

  ngOnInit(): void {
    this.guest = this.guestService.guest;

    this.form = new FormGroup({
      name: new FormControl(this.guest.name, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      nik: new FormControl(this.guest.nik, Validators.required),
      phone: new FormControl(this.guest.phone, Validators.required),
      source: new FormControl(this.guest.source, Validators.required),
    });
  }

  tabHandler(tab: string) {
    this.selectedTab = tab;
  }

  onSubmit() {
    this.guestService.setGuest(
      this.form.get('name').value,
      this.form.get('nik').value,
      this.form.get('phone').value,
      this.form.get('source').value
    );
    this.router.navigate(['/loan', 'account-created']);
  }
}
