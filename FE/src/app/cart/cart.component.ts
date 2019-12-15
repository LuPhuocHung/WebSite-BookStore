import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Cart, Mess } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart;
  mess: Mess;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  async ngOnInit() {
    //await this.AddtoCarts();
    await this.GetCart();

  }
  async AddtoCarts() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.cartService.AddtoCart(id).subscribe(res => this.mess = res);
    console.log(this.mess.message);
  }
  async GetCart() {
    await this.cartService.getShoppingCart().toPromise().then(res => this.carts = res);
    await console.log(this.carts);
  }
}
