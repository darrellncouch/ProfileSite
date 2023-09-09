import { Component } from '@angular/core';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'staticApp';
  public selected = 0;
  public selectedClass = "selected";

  public navigationItems: Array<NavigationItem> = [
    { id: NavItem.About, title: "About", link: ""},
    { id: NavItem.Skills, title: "Skills", link: "skills"},
    { id: NavItem.Experience, title: "Experience", link: "experience"}

  ]

  constructor(private readonly router: Router) {

  }

  public onNavItemClick(item: NavigationItem)
  {
    this.selected = item.id
    this.router.navigate([item.link])
  }

}

export interface NavigationItem {
  id: number;
  title: string;
  link: string;
}

export enum NavItem {
  About,
  Skills,
  Experience,
  Contact
}

