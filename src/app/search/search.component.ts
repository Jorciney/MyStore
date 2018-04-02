import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
  }

  public search(myForm) {
    if (myForm.title) {
      const product = this.productService.getProuctsByTitle(myForm.title);
      this.router.navigateByUrl('/products/'  + product[0].id);
    }
  }

}
