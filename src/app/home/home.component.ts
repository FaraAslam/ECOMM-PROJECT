import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
popularProduct:undefined | product[];
trendyProduct:undefined | product[];
  constructor(private product:ProductService){}

  ngOnInit(): void {
    this.product.papularProducts().subscribe((data)=>{
      if(data){
this.popularProduct=data;
      }
    })
    this.product.trendyProduct().subscribe((data)=>{
      if(data){
        this.trendyProduct=data;
      }
    })
  }
}
