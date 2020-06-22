import { Component, OnInit, Injectable, Injector } from '@angular/core';

@Injectable()
class Product {
  constructor(private name: string, private color: string) {
  }
}

@Injectable()
class PurchaseOrder {
  private amount: number;
  constructor(private product: Product) {
  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  date: Date;
  constructor() { }

  ngOnInit() {
    this.date = this.nimusDays(new Date(), 2);
    const injector = Injector.create({
      providers: [{
        provide: Product,
        useFactory: () => {
          return new Product('xiaomi', 'black');
        },
        deps: []
      }, {
        provide: PurchaseOrder,
        useClass: PurchaseOrder,
        deps: [Product]
      }]
    });
  }

  nimusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
