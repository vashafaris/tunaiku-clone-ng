import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-service-area',
  templateUrl: './confirm-service-area.component.html',
  styleUrls: ['./confirm-service-area.component.scss'],
})
export class ConfirmServiceAreaComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      isPrimaryLocation: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    this.router.navigate(['/loan', 'create-account']);
  }
}
