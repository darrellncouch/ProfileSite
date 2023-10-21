import { Component } from '@angular/core';
import { Navigation, NavigationStart, Router, RouterEvent } from '@angular/router';
import { INavigationItem } from 'src/core/INavigationItem';
import { NavItem } from 'src/core/NavItem';
import { NavigationService } from './services/navigation.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'staticApp';
  public selected = 0;
  public selectedClass = "selected";

  public navigationItems: Array<INavigationItem> = [
    { id: NavItem.About, title: "About", link: ""},
    { id: NavItem.Skills, title: "Skills", link: "skills"},
    { id: NavItem.Experience, title: "Experience", link: "experience"},
    { id: NavItem.Calendar, title: "Calendar", link: "calendar"}
  ]

  constructor(
    private readonly router: Router,
    private readonly navService: NavigationService
  ) {
    this.navService._selectedItem.subscribe(x => this.selected = x);
    this.router.events
      .subscribe( x => {
        if(x instanceof NavigationStart) {
          const target = this.navigationItems.find(item => x.url == `/${item.link}`);
          this.navService.setSelectedNavItem(target?.id || 0);
        }
      })
  }

  public onNavItemClick(item: INavigationItem)
  {
    this.navService.setSelectedNavItem(item.id);
    this.router.navigate([item.link])
  }

  public onRouteChange(event: any) {
    console.log(event);
  }

}
