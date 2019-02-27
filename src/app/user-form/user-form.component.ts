import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  name = '';
  isHighlight: boolean;

  constructor() { }

  ngOnInit() {
    this.isHighlight = false;
  }
  changeShape() {
    this.isHighlight = !this.isHighlight;
  }
}
