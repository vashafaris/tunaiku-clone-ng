import { Injectable } from '@angular/core';
import { Guest } from '../model/guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  guest: Guest;

  constructor() {
    this.guest = new Guest(2, 6, 340000, '', '', '', '', '');
  }

  setGuest(name: string, nik: string, phone: string, source: string): void {
    this.guest.name = name;
    this.guest.nik = nik;
    this.guest.phone = phone;
    this.guest.source = source;
  }
}
