import { Component, OnInit } from '@angular/core';
import { Goods, GoodsService } from '../services/goods.service';

@Component({
  selector: 'app-tab02',
  templateUrl: './tab02.component.html',
  styleUrls: ['./tab02.component.scss']
})
export class Tab02Component implements OnInit {

  constructor(public goodsservice: GoodsService) { }

  ngOnInit() {
  }

}
