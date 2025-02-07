import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { OurServicesComponent } from '../our-services/our-services.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    SubHeadingComponent,
    OurServicesComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
