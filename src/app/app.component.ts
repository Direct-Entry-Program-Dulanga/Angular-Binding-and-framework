import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  price = 100;
  discount = 10;


  /*updatePrice(price: string) {
    this.price = +price;
  }

  updateDiscount(discount: string) {
    this.discount = +discount;
  }*/

  shouldHighlight(): boolean{
    return (this.discount > 5);
  }
}
