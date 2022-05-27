import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productsData:any = [
    {
      id:1,
      name:'product-1',
    },
    {
      id:2,
      name:'product-2',
    },
    {
      id:3,
      name:'product-3',
    },
    {
      id:4,
      name:'product-4',
    },
    {
      id:5,
      name:'product-5',
    },
    {
      id:6,
      name:'product-6',
    },
    {
      id:7,
      name:'product-7',
    },
    {
      id:8,
      name:'product-8',
    },
    {
      id:9,
      name:'product-9',
    },
    {
      id:10,
      name:'product-10',
    },
    {
      id:11,
      name:'product-11',
    },
    {
      id:12,
      name:'product-12',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
