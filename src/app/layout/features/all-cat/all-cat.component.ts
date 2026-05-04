import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cat } from '../../../core/models/cat.interface';
import { AllSubCatService } from '../../../core/services/allsubcat/all-sub-cat.service';

@Component({
  selector: 'app-all-cat',
  imports: [RouterLink],
  templateUrl: './all-cat.component.html',
  styleUrl: './all-cat.component.css',
})
export class AllCatComponent {
  allCat = signal<Cat[]>([]);


    private readonly allSubCatService: AllSubCatService = inject(AllSubCatService);

ngOnInit(): void {
      this.allSubCatService.getAllBrands().subscribe({
        next: (res) => {
          this.allCat.set(res.data);
        },
      });
    }
}
