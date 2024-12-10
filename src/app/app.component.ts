import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showSideBar = true;
  constructor( private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        const noSidebarRoutes = ['/login', '/signUp'];
        this.showSideBar = !noSidebarRoutes.includes(event.url);
      }
    });
  }
  

}

