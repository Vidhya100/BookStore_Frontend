import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : any;
  constructor(private httpService : HttpService) {}

  
  
  register(reqdata:any){
    let header = {
      headers: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/Register',reqdata,false,header)
  }
}
