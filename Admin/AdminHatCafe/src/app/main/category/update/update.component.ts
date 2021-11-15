import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service'
import {Router,ActivatedRoute} from '@angular/router'
import { NotificationService } from 'src/app/core/services/notification.service'
import { UtilityService } from 'src/app/core/services/utility.service';

declare const Validator:any, $:any;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  category:any = {};
  name_category:any;
  desc_category:any;
  id_parent:any;
  currentId=this.router.snapshot.paramMap.get('id')
  currentSlug=this.router.snapshot.paramMap.get('categories_slug')
  $:any = document.querySelector.bind(document)
    categories:any = [];
    constructor(
      private dataService:DataService,
      private route:Router,
      private router: ActivatedRoute,
      private notification :NotificationService,
      private utilityService:UtilityService,
    ) { }
    backPage(){
        this.route.navigate(['/main/category/index'])
      }

  ngOnInit(): void {
    this.getData();
    this.validate();
  }
  getData(){
    this.dataService.GET('api/Categories/get-item-by-slug?categories_slug='+this.currentSlug).subscribe(
      (res:any)=>{
        console.log(res)
        this.categories =res
        this.name_category = res.categories_name
        this.desc_category = res.categories_descriptions
        this.dataService.GET('api/Categories/get-item').subscribe(
          (data:any) =>{
          this.renderMenu(data)
        })
      }

      
    )
  }
        // validate form
  validate() {
          Validator({
            form: '#form-1',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
              Validator.isRequired('#name'),
              Validator.isRequired('#desc'),
            ],
            onSubmit: (categories: any) => {
              categories={
                categories_id : this.currentId,
                categories_slug:this.utilityService.makeSeoTitle(categories.categories_name),
                categrories_images:"",
                categories_descriptions:this.desc_category,
                ...categories
              }
              console.log(categories);
              this.dataService.PUT('api/Categories/update-item',categories).subscribe((res:any)=>{
                this.notification.alertSuccessMS("thông báo",'Bạn đã cập nhật thành công .')
                // this.route.navigate(['/main/category/index'])
              },err=>this.notification.alertErrorMS("Thông báo",'có lỗi xảy ra vui lòng thử lại'))
            }
          })
  }
    renderMenu(categories: any) {
          let html = '<option value="0">Chọn danh mục cha</option>'
          function buildMenu(items: any, saparate: string) {
            items.forEach((item: any) => {
              let temp = `<option value="${item.categories_id}">${saparate} ${item.categories_name}</option>`;
              html += temp
              // if (item.children && item.children.length > 0) {
              //   buildMenu(item.children, saparate + '--|');
              // }
            })
            return html
          }
          // categories.forEach((val: any) => {
          //   val.children = []
          //   categories.forEach((val1: any) => {
          //     if (val.categories_id == val1.categories_parent_id)
          //       val.children.push(val1)
          //   })
          // })
          // categories = categories.filter((val: any) => val.parentId == 0)
          $('#select_category').html(buildMenu(categories, ''))
  }
}
