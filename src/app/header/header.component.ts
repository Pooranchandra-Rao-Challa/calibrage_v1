import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  activeRoute: string = ''; // Store the active route dynamically

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the current route with the leading slash
        this.activeRoute = this.router.url; // Set the active route dynamically
      }
    });
  }
}
