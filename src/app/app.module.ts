import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {SearchComponent} from './search/search.component';
import {ProductService} from './shared/product.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // the following will be used when the user wants to navigate to the product details
    RouterModule.forRoot([
      // when the path is the root, display the home component
      {path: '', component: HomeComponent},
      // whenever this is the path after the root url, go to the product details
      {path: 'products/:productId', component: ProductDetailComponent}
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
