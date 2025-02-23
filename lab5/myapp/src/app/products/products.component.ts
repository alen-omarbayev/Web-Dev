import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  likes: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <section class="categories">
      <h2>Выберите категорию</h2>
      <button *ngFor="let category of categories" (click)="selectCategory(category)">
        {{ category.name }}
      </button>
    </section>

    <section class="results" *ngIf="selectedCategory">
      <h2>{{ selectedCategory.name }}</h2>
      <div class="products">
        <div *ngFor="let product of selectedCategory.products" class="product">
          <img [src]="product.image" [alt]="product.name" class="product-img"/>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Рейтинг: {{ product.rating }}</p>
          <p>Лайков: {{ product.likes }}</p>
          <a [href]="product.link" target="_blank">Посмотреть</a>
          <button (click)="likeProduct(product)" class="like-button">like</button>
          <button (click)="removeProduct(product)" class="delete-button">Удалить</button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['products.component.css']
})
export class ProductsComponent {
  categories: Category[] = [
    { id: 1, name: 'Electronics', products: [
        { id: 1, image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large', name: 'Apple iPhone 16 Pro Max 256Gb', description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', rating: 4.9, link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/', likes: 0 },
        { id: 2, image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium', name: 'Наушники Marshall Major IV', description: 'Беспроводные наушники Marshall Major IV', rating: 5.0, link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/', likes: 0 },
        { id: 3, image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-large', name: 'Яндекс Станция Лайт 2', description: 'Умная колонка Яндекс Станция Лайт 2', rating: 4.8, link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/', likes: 0 },
        { id: 4, image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-large', name: 'Клавиатура AULA F75', description: 'Игровая механическая клавиатура AULA F75', rating: 4.9, link: 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/', likes: 0 },
        { id: 5, image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-large', name: 'Power Adapter USB Type-C', description: 'Зарядное устройство Apple 18W USB-C Power Adapter', rating: 4.8, link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/', likes: 0 }
      ]},
    { id: 2, name: 'Clothes', products: [
        { id: 6, image: 'https://resources.cdn-kaspi.kz/img/m/p/p4e/pdc/13278036.jpeg?format=gallery-medium', name: 'Hoodie BMW', description: 'Худи QWERTY BMW черный', rating: 4.9, link: 'https://kaspi.kz/shop/p/hudi-qwerty-bmw-qwerty-008-chernyi-m-131448788/?c=750000000', likes: 0 },
        { id: 7, image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/haa/85408786776094.jpg?format=gallery-medium', name: 'Спортивные брюки', description: 'Спортивные брюки серый', rating: 4.8, link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-marsel-seryi-l-117348588/?c=750000000', likes: 0 },
        { id: 8, image: 'https://resources.cdn-kaspi.kz/img/m/p/pba/p14/25302909.jpeg?format=gallery-medium', name: 'Air Jordan 1 Low', description: 'Кроссовки Nike AIR JORDAN 1 LOW голубой', rating: 4.9, link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-marsel-seryi-l-117348588/?c=750000000', likes: 0 },
        { id: 9, image: 'https://resources.cdn-kaspi.kz/img/m/p/haa/hcc/81551981183006.jpg?format=gallery-medium', name: 'Толстовка Nike', description: 'Nike tech fleece синий', rating: 5.0, link: 'https://kaspi.kz/shop/p/hudi-nike-cu4489-410-sinii-xl-109816455/?c=750000000', likes: 0 },
        { id: 10, image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h71/86628221779998.jpg?format=gallery-medium', name: 'Кеды Adidas Gazelle', description: 'Adidas Gazelle Зеленый', rating: 4.8, link: 'https://kaspi.kz/shop/p/kedy-adidas-gazelle-ji2062-zelenyi-35-121841374/?c=750000000', likes: 0 }
      ]},
    { id: 3, name: 'Food products', products: [
        { id: 11, image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/he9/83646930059294.jpg?format=gallery-large', name: 'Чипсы Lay’s Паприка', description: 'Картофельные чипсы Lay’s со вкусом паприки', rating: 4.9, link: 'https://kaspi.kz/shop/p/chipsy-lay-s-kartofel-nye-paprika-140-g-105085502/', likes: 0 },
        { id: 12, image: 'https://icf.listex.info/med/8af3c32c-ec81-5c48-022b-792131c3b699.jpg', name: 'Pepsi-cola ', description: 'Pepsi газированный напиток кола 0.25 л', rating: 5.0, link: 'https://kaspi.kz/shop/p/pepsi-gazirovannyi-napitok-kola-0-25-l-100208097/?c=750000000', likes: 0 },
        { id: 13, image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/p15/8775688.png?format=gallery-medium', name: 'Jameson', description: 'Подарочный набор Jameson виски 40% 700 мл', rating: 4.8, link: 'https://kaspi.kz/shop/p/jameson-viski-40-700-ml-130168129/?c=750000000', likes: 0 },
        { id: 14, image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/h93/84466506072094.png?format=gallery-medium', name: 'Asu вода лимон', description: 'ASU лимон негазированная 1 л', rating: 4.7, link: 'https://kaspi.kz/shop/p/asu-limon-negazirovannaja-1-l-100236221/?c=750000000', likes: 0 },
        { id: 15, image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/pd8/18539499.PNG?format=gallery-medium', name: 'Nәtige Protein кефир', description: 'Nәtige Protein кефир 1% 900 мл', rating: 4.9, link: 'https://kaspi.kz/shop/p/n-tige-protein-kefir-1-900-ml-104890077/?c=750000000', likes: 0 }
      ]},
    { id: 4, name: 'Auto Goods', products: [
        { id: 16, image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/ha2/85130790567966.jpg?format=gallery-large', name: 'Pro Wheels BBS RC300', description: 'Автомобильные диски Pro Wheels BBS RC300', rating: 5.0, link: 'https://kaspi.kz/shop/p/pro-wheels-bbs-rc300-8-5-10x18-5x120-d72-6-et20-seryi-116520320/', likes: 0 },
        { id: 17, image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h5a/84399151972382.jpg?format=gallery-medium', name: 'Салфетка для авто', description: 'Салфетка 790934 1 шт', rating: 4.8, link: 'https://kaspi.kz/shop/p/salfetka-790934-1-sht-114197164/?c=750000000', likes: 0 },
        { id: 18, image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/h2a/85004067405854.jpg?format=gallery-medium', name: 'Автомобильная визитка', description: 'Автомобильная визитка Sanym Group F8745 черный', rating: 5.0, link: 'https://kaspi.kz/shop/p/avtomobil-naja-vizitka-sanym-group-f8745-chernyi-116188200/?c=750000000', likes: 0 },
        { id: 19, image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/h46/86515467386910.jpg?format=gallery-medium', name: 'Универсальный спойлер для авто', description: 'Универсальный спойлер для авто черный', rating: 4.5, link: 'https://kaspi.kz/shop/p/universal-nyi-spoiler-dlja-avto-292836340-121231798/?c=750000000', likes: 0 },
        { id: 20, image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h53/67163056603166.jpg?format=gallery-medium', name: 'Rial Wheels', description: 'Автомобильные диски Rial X12X 9x20/5x112 D66.5 ET33 черный', rating: 5.0, link: 'https://kaspi.kz/shop/p/rial-x12x-9x20-5x112-d66-5-et33-chernyi-108161463/?c=750000000', likes: 0 }
      ]}
  ];

  selectedCategory?: Category;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  likeProduct(product: Product) {
    product.likes++;
  }

  removeProduct(product: Product) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p.id !== product.id);
    }
  }
}
