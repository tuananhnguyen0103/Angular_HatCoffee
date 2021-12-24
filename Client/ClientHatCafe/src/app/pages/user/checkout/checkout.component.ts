import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { CartService } from 'src/app/core/services/cart.service';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
declare const  Cart:any
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  constructor(
    public dataService:DataService,
    private cartService:CartService,
    private router: Router,
  ) { }
  cart:any;
  
  ngOnInit(): void {
  }
  submit(){
    var totalCart = 0;
    for (let index = 0; index < this.cartService.GetCart().length; index++) {
       totalCart += this.cartService.GetCart()[index].bill_details_prices*this.cartService.GetCart()[index].bill_details_quantity;
      
    }
    
    var data = {
      cart:this.cartService.GetCart(),
      userdata: {
        bill_total: totalCart,
        bill_customer_name: this.dataService.form.value.name,
        bill_customer_email: this.dataService.form.value.email,
        bill_customer_address: this.dataService.form.value.address,
        bill_customer_phone_number: this.dataService.form.value.phone ,
        bill_sale_day: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      }
    }
    console.log(data.userdata);
    console.log(this.cartService.GetCart())
    this.dataService.POST('api/Bill/create-object',data).subscribe(
      (res:any)=>{
        console.log(res)
        Cart.empty()
        this.router.navigate([''])
    },(error:any)=>{
      console.log(error)
    }
      
    )
  }
}
