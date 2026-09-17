import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name: string = 'FED Learning';

  topic: string = '4 Types of Data Binding ...';

  imageUrl: string =
    'https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D';

  city: string = 'New York';

  onSubmitClick() {
    alert('Hello world');
  }

  onCountryChange() {
    alert('Changed country');
  }
}
