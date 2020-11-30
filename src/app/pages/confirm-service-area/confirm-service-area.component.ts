import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoanService } from 'src/app/shared/services/loan.store';

@Component({
  selector: 'app-confirm-service-area',
  templateUrl: './confirm-service-area.component.html',
  styleUrls: ['./confirm-service-area.component.scss'],
})
export class ConfirmServiceAreaComponent implements OnInit {
  serviceAreaForm: FormGroup;

  constructor(private loanService: LoanService, private router: Router) {}

  ngOnInit(): void {
    this.serviceAreaForm = new FormGroup({
      isCoveredArea: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    this.loanService.setIsCoveredArea(
      this.serviceAreaForm.get('isCoveredArea').value,
    );
    this.router.navigate(['/loan', 'create-account']);
  }
}
