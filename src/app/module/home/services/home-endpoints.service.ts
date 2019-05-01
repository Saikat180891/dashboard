import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Observable } from "rxjs";
import { User } from "../models/users.model";
import { Menu } from "../models/menu.model";

@Injectable({
  providedIn: "root"
})
export class HomeEndpointsService {
  constructor(public apiService: ApiService) {}

  public getUsers(): Observable<User[]> {
    return this.apiService.get("/users.json");
  }

  public getMenu(): Observable<Menu[]> {
    return this.apiService.get("/menu.json");
  }
}
