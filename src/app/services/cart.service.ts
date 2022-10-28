import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cart } from '../models/cart';
import { policy } from '../models/policy';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Domain = environment.PnlDomain;
  controller = "Dashboard";
  method = "CartItems";

  constructor(private HttpClient: HttpClient) { }

  public DashboardList(): Observable<policy[]> {
    return this.HttpClient.get<policy[]>(this.Domain + '/' + this.controller);
  }

  public GetCartItems(): Observable<cart[]> {
    return this.HttpClient.get<cart[]>(this.Domain + '/' + this.controller + '/' + this.method);
  }
  public AddItemInCart(cart: cart): Observable<cart[]> {
    return this.HttpClient.post<cart[]>(this.Domain + '/' + this.controller, cart);
  }

  public UpdateItemInCart(cart: cart): Observable<cart[]> {
    return this.HttpClient.put<cart[]>(this.Domain + '/' + this.controller, cart);
  }

  public RemoveFromCart(id: any): Observable<cart[]> {
    return this.HttpClient.delete<cart[]>(this.Domain + '/' + this.controller + '/' + id);
  }
}
