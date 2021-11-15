import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,children:[
      // { 
      //   path:"404",
      //   component: NotFoundComponent
      // },
      // { 
      //   path:"home",
      //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      //   canActivate:[AuthGuard]
      // },
      // { 
      //   path:"category",
      //   loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      //   canActivate:[AuthGuard]
      // }
      { 
        path:"category",
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
