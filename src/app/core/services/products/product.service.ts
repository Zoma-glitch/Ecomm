import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly http : HttpClient =inject(HttpClient)
  getAllProducts():Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/v1/products`);
  }
}
