import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

@Input() item;

  constructor() { }

  ngOnInit() {

  }

  myFunc() {
    console.log('child: ' + this.item.id);
  }

}
