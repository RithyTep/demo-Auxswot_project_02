import { Component } from '@angular/core';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-content-feature',
  templateUrl: './content-feature.component.html',
  styleUrls: ['./content-feature.component.css']
})
export class ContentFeatureComponent {
  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}
