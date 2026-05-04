import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Cat } from '../../../core/models/cat.interface';
import { AllSubCatService } from '../../../core/services/allsubcat/all-sub-cat.service';


@Component({
  selector: 'app-categories',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {




}
