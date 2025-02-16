import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, ],
  template: `
   <section class="results">
  <h2>Featured Products</h2>
  <div class="products">
    <div *ngFor="let product of products" class="product">
      <img [src]="product.image" [alt]="product.name" />
      <h3>{{product.name}}</h3>
      <p>{{product.description}}</p>
      <p class="rating">Rating: {{product.rating}}</p>
      <div id="l"><a [href]="product.link" target="_blank">View Product</a>
      <div class="share">
      <a (click)="wShare(product.link)"><img src="https://img.icons8.com/?size=100&id=16733&format=png"></a>
      <a (click)="tShare(product.link)"><img src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png"></a>
</div></div>
    </div>
  </div>
</section>
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  wShare(productLink: string) {
   const message = `Check out this product: ${productLink}`;
   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
   window.open(whatsappLink, '_blank');
    }
  tShare(productLink: string) {
    const message = `Check out this product: ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramLink, '_blank');
  }

  products: Product[] = [
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hbc/ha2/85130790567966.jpg?format=gallery-large",
      "name": "Pro Wheels BBS RC300 8.5/10x18/5x120 D72.6 ET20 серый",
      "description": "Pro Wheels BBS",
      "rating": 5.0,
      "link": "https://kaspi.kz/shop/p/pro-wheels-bbs-rc300-8-5-10x18-5x120-d72-6-et20-seryi-116520320/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h27/he9/83646930059294.jpg?format=gallery-large",
      "name": "Чипсы Lay’s картофельные Паприка 140 г",
      "description": "Чипсы Lay’s картофельные Паприка",
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/chipsy-lay-s-kartofel-nye-paprika-140-g-105085502/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-large",
      "name": "Наушники Marshall Major IV черный",
      "description": "Наушники Marshall Major IV черный",
      "rating": 5.0,
      "link": "https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-large",
      "name": "Наушники Sony WH-1000XM5 черный\n",
      "description": "Наушники Sony WH-1000XM5 черный\n",
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/he9/hbc/79798659809310.jpg?format=gallery-large",
      "name": "Коврик для мыши Art Strata 900x400x3 рисунок",
      "description": "Коврик для мыши Art Strata 900x400x3 рисунок",
      "rating": 5.0,
      "link": "https://kaspi.kz/shop/p/art-strata-900x400x3-risunok-109753958/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-large",
      "name": "Клавиатура AULA F75 белый",
      "description": "Клавиатура AULA F75 белый",
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-large",
      "name": "Power Adapter USB Type-C ",
      "description": "Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый",
      "rating": 4.8,
      "link": "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large",
      "name": "Apple iPhone 16 Pro Max 256Gb",
      "description": "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-large",
      "name": "Яндекс Станция Лайт 2",
      "description": "Умная колонка Яндекс Станция Лайт 2 фиолетовый",
      "rating": 4.8,
      "link": "https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h77/h52/86474306912286.jpg?format=gallery-large",
      "name": "Креатин Maxler 100% Golden Creatine 300 г",
      "description": "Креатин Maxler 100% Golden Creatine 300 г",
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/maxler-100-golden-creatine-300-g-29502177/?c=750000000"
    }
  ];
}