import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-navbar',
  templateUrl: './m-navbar.component.html',
  styleUrls: ['./m-navbar.component.scss'],
})
export class MNavbarComponent implements OnInit {
  @Input() title: string;
  constructor(private location: Location) {}

  ngOnInit(): void {}

  backHandler(): void {
    this.location.back();
  }
}
