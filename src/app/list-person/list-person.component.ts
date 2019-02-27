import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  arrPersons = [
    {name: 'Huy', age: '15'},
    {name: 'Duyen', age: '25'},
    {name: 'Manh', age: '35'},
    {name: 'Quan', age: '45'},
    {name: 'B', age: '55'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
