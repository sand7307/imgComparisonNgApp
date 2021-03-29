import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url="https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }
  // addData(data){
  //   return this.http.post(this.url, data);
  // }
}
