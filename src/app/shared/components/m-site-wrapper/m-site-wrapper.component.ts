import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-site-wrapper',
  templateUrl: './m-site-wrapper.component.html',
  styleUrls: ['./m-site-wrapper.component.scss'],
})
export class MSiteWrapperComponent implements OnInit {
  @Input() headerTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
