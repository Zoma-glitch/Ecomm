import { Component, inject, signal } from '@angular/core';
import { CategoryService } from '../../../../core/services/categories/category.service';
import { Category } from '../../../../core/models/iproduct.interface';

@Component({
  selector: 'app-featured-categories',
  imports: [],
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.css',
})
export class FeaturedCategoriesComponent {
  private readonly categoryService: CategoryService = inject(CategoryService)


  catList = signal<Category[]>([])




  ngOnInit(): void {
    this.getAllCat();
  }

  getAllCat(){
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.catList.set(res.data);

      },
    });


  }



}
