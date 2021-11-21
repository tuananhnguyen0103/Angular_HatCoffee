import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartService } from 'src/app/core/services/cart.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})
export class MenuComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private cartService:CartService
  ) { }
  numberPages: number = 1;
  collection: any[] = [];
  itemCart: any;
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    return this.dataService.GET('api/Product/get-item').subscribe(
      (res:any)=>{
      this.collection = res
      console.log(this.collection);
    })
  }
  handlePageChange(event) {
    this.numberPages = event;
  }
  addToCart(item:any){
    this.itemCart = {
      id : item.product_id,
      name: item.product_name,
      quantity: 1,
      prices: item.product_prices,
      total : item.product_prices,
      images: item.product_image
    }
    this.cartService.AddToCart(this.itemCart);
  }
}
