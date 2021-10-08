import { Component, OnInit } from '@angular/core';
import { Product } from './product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = {
    name: "Radar",
    description: "Used for detection",
    price: 23,
    stock: 2
  }

  constructor() { }

  ngOnInit(): void {
  }

}
