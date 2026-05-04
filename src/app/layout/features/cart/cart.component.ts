import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { Iproduct } from '../../../core/models/iproduct.interface';
import { IproductItem } from '../../../core/models/product-item.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private readonly cartService: CartService = inject(CartService);

  totalCartPrice = signal<number>(0);
  cartId = signal<string>('');
  productslist = signal<IproductItem[]>([]);

  numOfCartItems = computed(() => this.cartService.numOfCartItems());

  ngOnInit(): void {
    this.getUserCart();
  }

  getUserCart() {
    this.cartService.getUserCart().subscribe((res) => {
      res;
      this.cartId.set(res.cartId);
      this.cartService.numOfCartItems.set(res.numOfCartItems);
      this.totalCartPrice.set(res.data.totalCartPrice);
      this.productslist.set(res.data.products);
    });
  }

  removeCartItem(pId: string) {
    this.cartService.removeCartItem(pId).subscribe((res) => {
      this.cartService.numOfCartItems.set(res.numOfCartItems);
      this.totalCartPrice.set(res.data.totalCartPrice);
      this.productslist.set(res.data.products);
    });
  }

  editQ(pId: string, count: number) {
    if (count == 0) {
      this.removeCartItem(pId);
      return;
    }
    this.cartService.editItemQ(pId, count).subscribe((res) => {
      this.totalCartPrice.set(res.data.totalCartPrice);
      this.productslist.set(res.data.products);
    });
  }

  clearCartAction() {
  this.cartService.clearCart().subscribe((res) => {
    this.cartService.numOfCartItems.set(res.numOfCartItems ?? 0);
    this.totalCartPrice.set(0);
    this.productslist.set([]);
    console.log(res);
  });
}
}
