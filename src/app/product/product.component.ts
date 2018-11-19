import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品' , 1.99, 3.5, '这是第一个商品,是我在学习慕课网Angular入门实践创造的', ['a', 'b', 'c']),
      new Product(2, '第二个商品' , 2.99, 4.5, '这是第二个商品,是我在学习慕课网Angular入门实践创造的', ['g', 's', 'd']),
      new Product(3, '第三个商品' , 3.99, 2.5, '这是第三个商品,是我在学习慕课网Angular入门实践创造的', ['j', 'z', 'm']),
      new Product(4, '第四个商品' , 4.99, 1.5, '这是第四个商品,是我在学习慕课网Angular入门实践创造的', ['x', 'd', 'v']),
      new Product(5, '第五个商品' , 5.99, 3.5, '这是第五个商品,是我在学习慕课网Angular入门实践创造的', ['s', 'b', 'u']),
      new Product(6, '第六个商品' , 6.99, 3.5, '这是第六个商品,是我在学习慕课网Angular入门实践创造的', ['w', 'd', 'e']),
    ];
    this.products.push(new Product(7, '第七个商品', 7.99, 4.5, '这是第七个商品,是我在学习慕课网Angular入门实践创造的' , ['s', 'h', 'f']));
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public  price: number,
    public  rating: number,
    public  desc: string,
    public  categories: Array<string>
  ) {
  }
}
