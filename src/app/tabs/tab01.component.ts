import { Component, OnInit } from '@angular/core';
import { Ginfo,Goods,GoodsService } from '../services/goods.service';

@Component({
  selector: 'app-tab01',
  templateUrl: './tab01.component.html',
  styleUrls: ['./tab01.component.scss']
})
export class Tab01Component implements OnInit {

  constructor(public goodsservice: GoodsService) { }

  ngOnInit() {
  }

  con_Pg() {
    
  }
}
