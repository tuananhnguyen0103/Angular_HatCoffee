import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './main/category/category.component';
import { ProductComponent } from './main/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ImgurApiService }from 'src/app/core/services/imgur-api.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers:[ImgurApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
