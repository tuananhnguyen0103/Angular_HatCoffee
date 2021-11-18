import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
  path:"",
    component: ProductComponent,children:[
      { 
        path:"index",
        component : IndexComponent,
      },
      { 
        path:"create",
        component : CreateComponent,
      },
      { 
        path:"update/:categories_slug/:id",
        component : UpdateComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
