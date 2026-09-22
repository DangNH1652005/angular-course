import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {
  userName = 'Harry';

  quantity = signal(1);

  handleSave() {
    console.log('Hello');
  }

  handleSelection(username: string) {
    console.log(username);
  }
}
