import { computed, effect, Service, signal } from '@angular/core';

@Service()
export class CartService {
  price = signal(300);
  quantity = signal(2);

  total = computed(() => this.price() * this.quantity());
  readonlyQuanlity = this.quantity.asReadonly();

  constructor() {
    effect(() => {
      localStorage.setItem('cart-total', this.total().toString());
    });
  }

  increaseQuantity() {
    this.quantity.update((q) => q + 1);
  }

  changePrice(price: number) {
    this.price.set(price);
  }
}
