import { Component, OnInit } from '@angular/core';
import { Menu } from './menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
        new Menu('Home', '/home', 'Home menu item'),
        new Menu('Ball Demo', '/ball', 'Ball menu item'),
        new Menu('About', '/about', 'About menu item')
  ];
  constructor() { }

  ngOnInit() {
  }

}
