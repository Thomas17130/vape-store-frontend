import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  private url(path: string) {
    // Ensure path begins with '/'
    return `${this.base}${path.startsWith('/') ? path : '/' + path}`;
  }

  get<T>(path: string, params?: any): Observable<T> {
    return this.http.get<T>(this.url(path), { params });
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(this.url(path), body);
  }

  put<T>(path: string, body: any): Observable<T> {
    return this.http.put<T>(this.url(path), body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(this.url(path));
  }

  // Examples
  getProducts() { return this.get<any[]>('/products'); }
  getProduct(id: string|number) { return this.get<any>(`/products/${id}`); }
  login(credentials: any) { return this.post<any>('/auth/login', credentials); }
  signup(data: any) { return this.post<any>('/auth/signup', data); }
}
