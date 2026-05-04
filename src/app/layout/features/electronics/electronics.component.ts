import { Component, inject, signal } from '@angular/core';
import { Category, Iproduct } from '../../../core/models/iproduct.interface';
import { ProductService } from '../../../core/services/products/product.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-electronics',
  imports: [],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css',
})
export class ElectronicsComponent {

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
