import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INTEREST } from '../constant/loan.constant';

import { Loan } from '../model/loan.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  public data: Observable<any>;
  private update: BehaviorSubject<any>;
  private store: Loan;

  constructor() {
    // Main Store
    this.setDefaultStore();

    // Default config for dispatching store
    this.update = <BehaviorSubject<any>>new BehaviorSubject({});
    this.data = this.update.asObservable();
    this.update.next(this.store);
  }

  // Dispatcher
  private setStore(obj: any): void {
    const data = (<any>Object).assign(this.store, obj);
    this.update.next(data);
  }

  setDefaultStore(): void {
    this.store = {
      loanValue: 2,
      loanDuration: 9,
      debt: 340336,
      isCoveredArea: null,
      name: '',
      nik: '',
      phone: '',
      discover: '',
    };
  }

  setIsCoveredArea(isCoveredArea: boolean): void {
    this.setStore({
      isCoveredArea,
    });
  }

  setName(name: string): void {
    this.setStore({
      name,
    });
  }

  setNik(nik: string): void {
    this.setStore({
      nik,
    });
  }

  setPhone(phone: string): void {
    this.setStore({
      phone,
    });
  }

  setDiscover(discover: string): void {
    this.setStore({
      discover,
    });
  }

  setLoanValue(loanValue: number) {
    this.setStore({
      loanValue,
    });
  }

  setLoanDuration(loanDuration: number): void {
    this.setStore({
      loanDuration,
    });
  }

  calculateDebt(): void {
    const debt = Math.floor(
      ((this.store.loanValue * 1000000) / this.store.loanDuration) * INTEREST,
    );

    this.setStore({
      debt,
    });
  }
}
