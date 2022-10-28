import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem = new Array<cart>;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.GetCartItems()
      .subscribe({
        next: (response) => {
          this.cartItem = response;
        }
      });
  }
  DeleteFromCart(cid: any) {
    var UserResponse = confirm("Are you sure to remove item from cart !!!")
    if (UserResponse) {
      this.cartservice.RemoveFromCart(parseInt(cid))
        .subscribe({
          next: (response) => {
            this.cartItem = response;
          }
        })
    }
  }
}
