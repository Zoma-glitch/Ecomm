import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  private readonly http : HttpClient =inject(HttpClient)


  checkout(cartId: string , address: object) : Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${environment.currentServer}` ,
      {
        "shippingAddress":address
      }
    )

  }





}
