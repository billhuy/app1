import {Component} from '@angular/core';

@Component({
  selector : 'app-parent',
  template : `
  <h3>{{value}}</h3>
  <app-child (myClick1) = "value = value + 1" (myClick2) = "value = value - 1"></app-child>
  `
})

export class ParentComponent {
  value = 0;
}
