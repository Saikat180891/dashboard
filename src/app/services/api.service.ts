import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl: string = "assets/dummy-data";
  constructor(public http: HttpClient) {}

  public get(endpoint: string): Observable<any> {
    return this.http.get(this.baseUrl + endpoint);
  }

  public post(endpoint: string, body: any): Observable<any> {
    return this.http.post(this.baseUrl + endpoint, body);
  }

  public update(endpoint: string, body: any): Observable<any> {
    return this.http.put(this.baseUrl + endpoint, body);
  }

  public delete(endpoint: string, body?: any): Observable<any> {
    return this.http.delete(this.baseUrl + endpoint, body);
  }
}
