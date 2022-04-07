import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class categoryList{

  constructor(

  public category_id: Number,

  public c_name : string

 ){

  }}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList:any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories(){

    this.http.get<any>('http://localhost:3000/productCategory').subscribe(

      response => {

        console.log(response);

        this.categoryList = response;

       });



  }

  

  

    
  }


