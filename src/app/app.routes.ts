import { Routes } from '@angular/router';
import { HomeComponent } from './layout/features/home/home.component';
import { CategoriesComponent } from './layout/features/categories/categories.component';
import { ShopComponent } from './layout/features/shop/shop.component';
import { BrandsComponent } from './layout/features/brands/brands.component';
import { CartComponent } from './layout/features/cart/cart.component';
import { WishlistComponent } from './layout/features/wishlist/wishlist.component';
import { LoginComponent } from './layout/features/login/login.component';
import { RegisterComponent } from './layout/features/register/register.component';
import { ForgetpasswordComponent } from './layout/features/forgetpassword/forgetpassword.component';
import { NotfoundComponent } from './layout/features/notfound/notfound.component';
import { authGuard } from './core/guard/auth/auth-guard';
import { AddressComponent } from './layout/features/address/address.component';
import { AllCatComponent } from './layout/features/all-cat/all-cat.component';
import { ElectronicsComponent } from './layout/features/electronics/electronics.component';
import { WomenFashionComponent } from './layout/features/women-fashion/women-fashion.component';
import { MenFashionComponent } from './layout/features/men-fashion/men-fashion.component';
import { BeautyHealthComponent } from './layout/features/beauty-health/beauty-health.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Home' },
  { path: 'home', component: HomeComponent, pathMatch: 'full', title: 'Home' },
  { path: 'AllCategories', component: AllCatComponent, pathMatch: 'full', title: 'AllCategories' },
  { path: 'Electronics', component: ElectronicsComponent, pathMatch: 'full', title: 'Electronics' },
  { path: 'WomenFashion', component: WomenFashionComponent, pathMatch: 'full', title: 'WomenFashion' },
  { path: 'MenFashion', component: MenFashionComponent, pathMatch: 'full', title: 'MenFashion' },
  { path: 'BeautyHealth', component: BeautyHealthComponent, pathMatch: 'full', title: 'BeautyHealth' },
  {
    path: 'categories',
    component: CategoriesComponent,
    // pathMatch: 'full',
    title: 'Categories',
    children: [
      {
        path: 'AllCategories',
        component: AllCatComponent, //
        title: 'All Categories',
      },
      {
        path: 'Electronics',
        component: ElectronicsComponent, //
        title: 'Category Details',
      },
      {
        path: 'WomenFashion',
        component: WomenFashionComponent,
        title: 'Category Products',
      },
      {
        path: 'MenFashion',
        component: MenFashionComponent, //
        title: 'Category Products',
      },
      {
        path: 'BeautyHealth',
        component: BeautyHealthComponent,
        title: 'Category Products',
      },
    ],
  },
  { path: 'shop', component: ShopComponent, pathMatch: 'full', title: 'Shop' },
  { path: 'brands', component: BrandsComponent, pathMatch: 'full', title: 'Brands' },
  { path: 'cart', component: CartComponent, pathMatch: 'full', title: 'Cart' },
  { path: 'wishlist', component: WishlistComponent, pathMatch: 'full', title: 'Wishlist' },
  {
    path: 'checkout/:id',
    canActivate: [authGuard],
    component: AddressComponent,
    pathMatch: 'full',
    title: 'checkout',
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full', title: 'Login' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', title: 'Register' },
  {
    path: 'forgetPassword',
    component: ForgetpasswordComponent,
    pathMatch: 'full',
    title: 'Forgetpassword',
  },
  { path: '**', component: NotfoundComponent, pathMatch: 'full', title: 'Notfound' },
];
