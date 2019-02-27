import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor() { }

  en: string;
  vn: string;
  imageUrl: string;
  forgot: boolean;
  ngOnInit() {
    this.en = 'Good morning';
    this.vn = 'Chao buoi sang';
    this.imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    this.forgot = false;
  }
  toggleForgot() {
    this.forgot = !this.forgot;
  }

}
