import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';
import { Iproduct } from '../../../core/models/iproduct.interface';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-featured-products',
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProductsComponent {
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
