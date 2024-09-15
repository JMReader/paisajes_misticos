import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  standalone: true,
	imports: [NgbCarouselModule, NgIf],
})
export class CarrouselComponent {
  images = [1, 2, 3,4].map((n) => `assets/Carrousel/${n}.png`);
}
