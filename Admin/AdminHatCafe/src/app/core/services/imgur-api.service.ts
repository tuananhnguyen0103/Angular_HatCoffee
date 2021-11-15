import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError,  } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Imgur } from '../domain/imgur.user';
import { SystemConstants } from '../common/System';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ImgurApiService {
  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private readonly clientId = '65306ccfca52921';

  constructor(
    private httpClient: HttpClient,
    // private IMGUR_ACCESS_TOKEN: AuthenticationService;
  ) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      // Authorization: `Client-ID ${this.clientId}`,
      'Authorization': this.isAuthenticated() ?`Bearer ${this.getImgurCallAPI().access_token}`: ''
    }),
  };
  upload(b64Image: any) {
    
    const formData = new FormData();
    formData.append('image', b64Image);
    return this.httpClient.post(`${this.IMGUR_UPLOAD_URL}`, formData, this.httpOptions);
  }
  // uploadImage(b64Image: string): Observable<Object> {
  //   let headers = new HttpHeaders({ 'Authorization': `Bearer ${this.IMGUR_ACCESS_TOKEN}` });

  //   return this.httpClient.post(this.IMGUR_UPLOAD_URL, b64Image, { headers: headers });
  // }
  isAuthenticated():boolean {
    if(localStorage.getItem(SystemConstants.CURRENT_IMGUR)) return true;
    else return false;
  }
  getImgur(){
    console.log(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_IMGUR)||''))
    return JSON.parse(localStorage.getItem(SystemConstants.CURRENT_IMGUR)||'')
  }
  getImgurCallAPI(){
    let imgur : Imgur
    if(this.isAuthenticated()){
      imgur = new Imgur(this.getImgur())
    }
    else{
      imgur = null as any;
    }
    console.log(imgur)
    return imgur
  }
  CallAPI(b64Image: string): Observable<Object> {
    let data = {
      file: b64Image,
    }
    console.log(data)
    const formData = new FormData();
    formData.append('image', b64Image);
    console.log(formData)
    return this.httpClient.post(`${this.IMGUR_UPLOAD_URL}`, formData, this.httpOptions).pipe(
      // Tự động bắt lỗi
      // Có lỗi sẽ chạy vào hàm handleError
      // catchError return ra mã lỗi
      catchError(this.handleError),
      // Pass qua thì sẽ chạy vào thằng tap
      // Tap xử lý dữ liệu
      tap((res:any)=>{
        console.log(res)
        localStorage.setItem(SystemConstants.CURRENT_IMGUR,JSON.stringify(res))
      })
    );
  }
  handleError(error: HttpErrorResponse) {
    let strMsg = "";
    if (error.error instanceof ErrorEvent) {
      strMsg = 'An error occurred: ' + error.error.message
      console.log('An error occurred: ' + error.error.message)
    }
    else {
      strMsg = 'Back end return code: ' + error.status + '; body was: ' + JSON.stringify(error.error)
      console.log('Back end return code: ' + error.status + '; body was: ' + JSON.stringify(error.error))
    }
    return throwError(strMsg)
  }
}