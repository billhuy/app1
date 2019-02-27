import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector : 'app-child',
  template : `
  <button (click) = "addForParent()">Add</button>
  <button (click) = "minusForParent()">Minus</button>
  `
})

export class ChildComponent {
  @Output() myClick1 = new EventEmitter();
  @Output() myClick2 = new EventEmitter();

  addForParent() {
    this.myClick1.emit();
  }
  minusForParent() {
    this.myClick2.emit();
  }
}
