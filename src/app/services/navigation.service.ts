import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from 'src/core/NavItem';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private selectedItem = new BehaviorSubject<NavItem>(NavItem.About);
  public _selectedItem = this.selectedItem.asObservable();

  constructor() { }

  public setSelectedNavItem(item: NavItem) {
    this.selectedItem.next(item);
  }

}
