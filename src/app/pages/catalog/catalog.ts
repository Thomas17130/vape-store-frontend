import { Component, signal, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  private api = inject(ApiService);
  readonly products = signal<any[]>([]);

  constructor() {
    // load products from backend (silent failure logged to console)
    this.api.getProducts().subscribe({
      next: (list: any[]) => this.products.set(list || []),
      error: (err: any) => console.error('Failed to load products', err)
    });
  }
}
