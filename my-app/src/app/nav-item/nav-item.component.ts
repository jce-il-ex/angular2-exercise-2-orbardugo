import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  navArray = [{id:1},{id:2},{id:3},{id:4}];
   @Input() item;
  constructor() { }
  
  ngOnInit() {
  }

}
