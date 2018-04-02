import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../shared/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    const prodId: number = parseInt(this.route.snapshot.params['productId'], 0);
    this.product = this.productService.getProductById(prodId);
  }

}
