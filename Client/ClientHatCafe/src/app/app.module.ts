import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductComponent } from './pages/product/product.component';
import { PagesComponent } from './pages/pages.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    MenuComponent,
    ProductComponent,
    PagesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
