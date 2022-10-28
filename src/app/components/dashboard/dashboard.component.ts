import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from 'src/app/models/cart';
import { policy } from 'src/app/models/policy';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies = new Array<policy>;
  cartitem: cart = {
    cid: 0,
    cpid: 0,
    cpname: ''
  }

  constructor(private cartservice: CartService,private router:Router) { }
  num: number = 0;
  type: string = 'GMC'
  ngOnInit(): void {
    this.cartservice.DashboardList()
      .subscribe({
        next: (response) => {
          this.policies = response;
        },
      })
  }
  OnAddcart(cpid: any,cpname:string): void {
    this.cartitem.cpid = parseInt(cpid);
    this.cartitem.cpname = cpname;
    this.cartservice.AddItemInCart(this.cartitem)
      .subscribe({
        next: (response) => {      
          if(response.length==0){
            alert("This policy is already added in cart");
          }
          this.router.navigate(["../cartroute"]);
        }
      })
  }
}
