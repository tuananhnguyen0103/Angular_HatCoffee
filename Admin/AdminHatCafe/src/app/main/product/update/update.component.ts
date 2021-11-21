import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service'
import {Router,ActivatedRoute} from '@angular/router'
import { NotificationService } from 'src/app/core/services/notification.service'
import { UtilityService } from 'src/app/core/services/utility.service';
import {ImgurApiService} from 'src/app/core/services/imgur-api.service';

declare const Validator:any, $:any;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})


export class UpdateComponent implements OnInit {
  imageSrc: any;
  done = false;
  show = false;

  product:any = {};
  product_name:any;
  product_descriptions:any;
  id_parent:any;

  currentId=this.router.snapshot.paramMap.get('id')
  currentSlug=this.router.snapshot.paramMap.get('product_slug')
  $:any = document.querySelector.bind(document)
  products:any = [];
  constructor(
    private dataService:DataService,
    public imgurServicel:ImgurApiService,
      private route:Router,
      private router: ActivatedRoute,
      private notification :NotificationService,
      private utilityService:UtilityService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.dataService.GET('api/Product/get-item-by-slug?product_slug='+this.currentSlug).subscribe(
      (res:any)=>{
        console.log(res)
        this.product =res
        this.product_descriptions = res.product_descriptions
        this.product_name = res.product_name
        this.imageSrc = res.product_image
        this.dataService.GET('api/Categories/get-item').subscribe(
          (data:any) =>{
          this.renderMenu(data)
        })
      }

      
    )
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
    $('#select_category').html(buildMenu(categories, ''))
}
// readURL(event: any) {
//   // console.log(event);
//   if (event.target.files && event.target.files[0]) {
//       const file = event.target.files[0];
//       // console.log(file);
//       this.show = true;
//       this.done = false;
//       // console.log(event.target.files[0].webkitRelativePath);
//       const reader = new FileReader();
//       reader.onload = e => this.imageSrc = reader.result;

//       reader.readAsDataURL(file);

//       // console.log(file);
//       this.imgurServicel.upload(file).subscribe((res:any) =>{
//         console.log(res.data.image.url)
//         this.imageSrc = res.data.image.url
//         this.done = true;
//         this.show = false;
//         console.log(this.imageSrc);
//       },(err) =>{
//         console.log(err)
//       });
//   }
// }
}
