import {Injectable} from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    if (foundProducts.length > 0) {
      return foundProducts;
    }
    return products;
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }

  getProuctsByTitle(productTitle: string): Product[] {
    products.map(p => {
      if (p.title.startsWith(productTitle)) {
        foundProducts.push(p);
      }
    });
    return foundProducts;
  }
}

const foundProducts: Product[] = [];

const products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'shortDescription': 'This is a short description of the First Product',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.5,
    'shortDescription': 'This is a short description of the Second Product',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Third Product',
    'price': 74.99,
    'rating': 4.2,
    'shortDescription': 'This is a short description of the Third Product',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Fourth Product',
    'price': 84.99,
    'rating': 3.9,
    'shortDescription': 'This is a short description of the Fourth Product',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Fifth Product',
    'price': 94.99,
    'rating': 5,
    'shortDescription': 'This is a short description of the Fifth Product',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 5,
    'title': 'Sixth Product',
    'price': 54.99,
    'rating': 4.6,
    'shortDescription': 'This is a short description of the Sixth Product',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  }
];
