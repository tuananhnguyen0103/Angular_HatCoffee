import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductRoutingModule } from './product-routing.module';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    IndexComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class ProductModule { }
