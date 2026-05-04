import { Component, inject, signal } from '@angular/core';
import { Iproduct } from '../../../core/models/iproduct.interface';
import { ProductService } from '../../../core/services/products/product.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-beauty-health',
  imports: [],
  templateUrl: './beauty-health.component.html',
  styleUrl: './beauty-health.component.css',
})
export class BeautyHealthComponent {


  private readonly productService: ProductService = inject(ProductService);
    private readonly cartService: CartService = inject(CartService);

  productList = signal<Iproduct[]>([]);
    ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: (res) => {
          this.productList.set(res.data);
        },
      });
    }



    addToCartAction(pId: string) {
      this.cartService.addToCart(pId).subscribe({
        next: (res) => {
          this.cartService.numOfCartItems.set(res.numOfCartItems)
          console.log(res);
        },
      });
    }


}
