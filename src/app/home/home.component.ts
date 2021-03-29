import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service'
// import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mypro:boolean= true;
  data:any= [];
  adddedData= [];
  p: number = 1;
  constructor(private userSer:UserServiceService) {
    this.userSer.getData().subscribe(data =>{
      console.log(data);
      this.data = data;
    })
   }

  ngOnInit(): void {
  }
  onAdd(item) : void{
    console.log(item);
    this.adddedData.push(item);
  }
  onDelete(i){
    this.adddedData.splice(i, 1);
  }
  removeItem(item){
    this.adddedData.splice(item, 1);
  }
}
