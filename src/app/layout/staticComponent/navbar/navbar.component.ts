import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from './../../../core/services/auth/auth.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  private readonly router: Router = inject(Router);
  private readonly authService: AuthService = inject(AuthService);
  private readonly cartService: CartService = inject(CartService);


isLogged = computed(()=> this.authService.isLogged() )
numOfCartItems = computed(()=> this.cartService.numOfCartItems() )

mobileMenuOpen = false;


ngOnInit(): void {
this.cartService.numOfCartItems()
}




  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

logout(){
  localStorage.removeItem('freshtoken');
  localStorage.removeItem('freshUser');
  this.router.navigate(['/login'])
  this.authService.isLogged.set(false)
}





}
