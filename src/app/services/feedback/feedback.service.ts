import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  token:any;

  constructor(private http: HttpService) { 
    this.token = localStorage.getItem('token');
  }

  getAllFeedback(bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.http.getService(`/FeedBack/Getfeedback?bookId=` +bookId,false,header)
  }

  addFeedback(reqdata:any){
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('/FeedBack/Addfeedback', reqdata, true, header);
  }
}
