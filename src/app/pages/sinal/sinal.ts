import { Component, computed, effect, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  imports: [],
  selector: 'app-sinal',
  styleUrl: './sinal.css',
  templateUrl: './sinal.html',
})
export class Sinal {
  cartService = inject(CartService);

  theme = signal('light');
  constructor() {
    effect(() => {
      localStorage.setItem('theme', this.theme());
    });
  }

  count = signal(0);
  readonlyCount = this.count.asReadonly();

  price = signal(300);
  quantity = signal(2);
  total = computed(() => this.price() * this.quantity());

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }

  reset() {
    this.count.set(0);
  }

  incrementQuantity() {
    this.quantity.update((value) => value + 2);
  }

  resetQuantity() {
    this.quantity.set(2);
  }
}
