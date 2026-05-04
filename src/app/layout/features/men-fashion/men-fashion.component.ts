import { Component, inject, signal } from '@angular/core';
import { Category, Iproduct } from '../../../core/models/iproduct.interface';
import { CartService } from '../../../core/services/cart/cart.service';
import { ProductService } from '../../../core/services/products/product.service';

@Component({
  selector: 'app-men-fashion',
  imports: [],
  templateUrl: './men-fashion.component.html',
  styleUrl: './men-fashion.component.css',
})
export class MenFashionComponent {
  catList = signal<Category[]>([])

  private readonly productService: ProductService = inject(ProductService);
    private readonly cartService: CartService = inject(CartService);
    // private readonly cartService:CartService  = inject(ToastreService);

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
