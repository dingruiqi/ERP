import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  nodes = [
    {
      title: '商品分类',
      key: '1',
      expanded: true,
      icon: 'folder-open',
      children: [
        { title: '商品1', key: '1001', icon: 'folder', isLeaf: true },
        { title: '商品2', key: '1002', icon: 'folder', isLeaf: true }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
