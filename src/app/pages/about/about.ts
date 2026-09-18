import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TextStyle} from '../../text-style';

@Component({
  imports: [CommonModule, TextStyle],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  isActive = true;

  textColor = 'blue';
  isLoggedIn = true;

  users = ['John', 'Peter', 'Bob'];
  status = 'act';
}
