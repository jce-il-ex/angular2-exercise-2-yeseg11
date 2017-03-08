import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

myList = [
{
  id:1,
  txt: 'hello im 1' 
},
{
  id:2,
  txt: 'hello im 2' 
},
{
  id:3 
},
{
  id:4,
  txt: 'hello im 4' 
}
];

  constructor() { }

  ngOnInit() {
  }

}
