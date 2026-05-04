import { Component, inject, signal } from '@angular/core';
import { Brands } from '../../../core/models/brands.interface';
import { BrandsService } from '../../../core/services/brands/brands.service';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {

  allBrands = signal<Brands[]>([]);


    private readonly brandsService: BrandsService = inject(BrandsService);

ngOnInit(): void {
      this.brandsService.getAllBrands().subscribe({
        next: (res) => {
          this.allBrands.set(res.data);
        },
      });
    }


}
