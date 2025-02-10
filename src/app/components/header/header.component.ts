import { Component } from '@angular/core';
import { NavbarComponent } from '../../lib/navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
