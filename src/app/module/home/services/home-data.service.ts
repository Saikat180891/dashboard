import { Injectable } from "@angular/core";
import { User } from "../models/users.model";
import { Menu } from "../models/menu.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HomeDataService {
  users = new BehaviorSubject<User[]>([
    {
      name: null,
      phoneNumber: null,
      address: null
    }
  ]);
  menu = new BehaviorSubject<Menu[]>([
    {
      itemName: null
    }
  ]);

  constructor() {}

  setUsers(users: User[]): void {
    this.users.next(users);
  }

  setMenu(menu: Menu[]): void {
    this.menu.next(menu);
  }

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }

  getMenu(): Observable<Menu[]> {
    return this.menu.asObservable();
  }
}
