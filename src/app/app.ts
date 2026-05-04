import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Flowbite } from './core/services/flowbite/flowbite';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './layout/staticComponent/navbar/navbar.component';
import { FooterComponent } from './layout/staticComponent/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ecomm');
  private readonly flowbite: Flowbite = inject(Flowbite);
  ngOnInit(): void {

this.fireflowbite();



  }

  fireflowbite() {
    this.flowbite.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
