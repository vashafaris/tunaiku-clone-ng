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
}
