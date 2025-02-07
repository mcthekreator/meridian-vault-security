import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    SubHeadingComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
