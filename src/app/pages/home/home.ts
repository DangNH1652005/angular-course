import { Component, signal } from '@angular/core';
import { Profile } from '../profile/profile';

@Component({
  imports: [Profile],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  const = signal(0);

  getMessage() {
    return 'Example of Template Expression';
  }

  showMessage(name: string) {
    console.log(name);
  }

  getValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

  keyPreassed(event: KeyboardEvent) {
    console.log(event.key);
  }

  showName(value: string) {
    console.log(value);
  }
}
