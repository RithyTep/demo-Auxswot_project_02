import { Component } from '@angular/core';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-content-feature2',
  templateUrl: './content-feature2.component.html',
  styleUrls: ['./content-feature2.component.css']
})
export class ContentFeature2Component {
  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}
