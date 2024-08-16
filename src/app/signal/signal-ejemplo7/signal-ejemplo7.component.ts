import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Products: Product[] = [
  { id: 1, name: 'Product A', price: 500, quantity: 0 },
  { id: 2, name: 'Product B', price: 200, quantity: 0 },
  { id: 3, name: 'Product C', price: 800, quantity: 0 },
  { id: 4, name: 'Product D', price: 1500, quantity: 0 },
  { id: 5, name: 'Product E', price: 2000, quantity: 0 },
  { id: 6, name: 'Product F', price: 100, quantity: 0 },
];

@Component({
  selector: 'app-signal-ejemplo7',
  standalone: true,
  imports: [MatButtonModule, MatButton, NgFor, NgIf],
  templateUrl: './signal-ejemplo7.component.html',
  styleUrl: './signal-ejemplo7.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalEjemplo7Component {
  products = signal(Products);
  cart = signal<Product[]>([]);

  totalPrice = computed(() => {
    return this.cart().reduce(
      (accumulated, current) => accumulated + current.price,
      0
    );
  });

  selectProductsIds = computed(() => {
    return this.cart().map((product) => product.id);
  });

  addToCart(product: Product) {
    this.cart.update((products) => {
      return [...products, product];
    });
  }

  removeFromCart(product: Product) {
    this.cart.update((products) => {
      //return products.filter((productInCart) => productInCart.id != product.id);
      console.log(products.findIndex((p) => p == product));
      console.log(products);
      return products.splice(
        products.findIndex((p) => p.id == product.id),
        1
      );
    });
  }

  totalProductsList = computed(() => {
    let countingOfEachProduct: Product[] = [];

    this.cart().map((productInCart) => {
      let count: number = 0;
      if (countingOfEachProduct) {
        for (let i = 0; i < countingOfEachProduct.length; i++) {
          if (countingOfEachProduct[i].id == productInCart.id) {
            countingOfEachProduct[i].quantity += 1;
            break;
          } else {
            count++;
          }
        }
        if (count == countingOfEachProduct.length) {
          productInCart.quantity = 1;
          countingOfEachProduct = [...countingOfEachProduct, productInCart];
        }
      } else {
        productInCart.quantity = 1;
        countingOfEachProduct = [...countingOfEachProduct, productInCart];
      }
    });
    return countingOfEachProduct;
  });
}
