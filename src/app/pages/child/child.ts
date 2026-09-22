import { Component, input, model, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  username = input('');

  saved = output();
  selected = output<string>();

  quantity = model(1);

  increase() {
    this.quantity.update((q) => q + 1);
  }

  selectedUser() {
    this.selected.emit('John');
  }

  onSave() {
    this.saved.emit();
  }
}
