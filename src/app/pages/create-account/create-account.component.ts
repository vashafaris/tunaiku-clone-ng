import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from 'src/app/shared/model/guest.model';
import { GuestService } from 'src/app/shared/services/guest.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  selectedTab = 'create-account';

  guest: Guest;
  form: FormGroup;
  signInForm: FormGroup;

  constructor(private guestService: GuestService, private router: Router) {}

  ngOnInit(): void {
    this.guest = this.guestService.guest;

    this.form = new FormGroup({
      name: new FormControl(this.guest.name, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(50),
      ]),
      nik: new FormControl(this.guest.nik, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      phone: new FormControl(this.guest.phone, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(9),
        Validators.maxLength(12),
      ]),
      source: new FormControl(this.guest.source, Validators.required),
    });

    this.signInForm = new FormGroup({
      phone: new FormControl(''),
    });

    console.log(this.form);
  }

  tabHandler(tab: string) {
    this.selectedTab = tab;
  }

  onSubmit() {
    console.log('fomrgroup', this.form);
    this.guestService.setGuest(
      this.form.get('name').value,
      this.form.get('nik').value,
      this.form.get('phone').value,
      this.form.get('source').value
    );
    this.router.navigate(['/loan', 'account-created']);
  }
}
