import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly http : HttpClient =inject(HttpClient)


  numOfCartItems = signal<number>(0)




  addToCart(pId:string):Observable<any> {
  return this.http.post(`${environment.baseUrl}/api/v1/cart`,{productId:pId})
  }
  getUserCart():Observable<any> {
  return this.http.get(`${environment.baseUrl}/api/v1/cart`)
  }

  removeCartItem(pId:string):Observable<any> {
  return this.http.delete(`${environment.baseUrl}/api/v1/cart/${pId}`)
  }
  editItemQ(pId:string,count:number):Observable<any> {
  return this.http.put(`${environment.baseUrl}/api/v1/cart/${pId}`,{"count":count})
  }
  clearCart():Observable<any> {
  return this.http.delete(`${environment.baseUrl}/api/v1/cart`)
  }








}
