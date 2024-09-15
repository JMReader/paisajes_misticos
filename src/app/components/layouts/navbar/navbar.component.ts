import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled:boolean = false;

  // @HostListener('window:scroll')
  // scrollEvent() {
  //   window.scrollY >= 600 ? (this.isScrolled = true) : (this.isScrolled = false);
  // }
}
