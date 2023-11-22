import { Component } from '@angular/core';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-content5',
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.css'],
})
export class Content5Component {
  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
  panelOpenState = false;
}
