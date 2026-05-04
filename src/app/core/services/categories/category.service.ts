import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly http : HttpClient =inject(HttpClient)
  getAllCategories():Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/v1/categories`);
  }
}
