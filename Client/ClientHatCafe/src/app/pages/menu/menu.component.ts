import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})
export class MenuComponent implements OnInit {

  constructor(
    private dataService:DataService,

  ) { }
  numberPages: number = 1;
  collection: any[] = [];
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
}
