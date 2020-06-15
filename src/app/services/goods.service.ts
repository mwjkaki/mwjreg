import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Ginfo {
  gcode: string;
  gname: string;
  stock: number;
  price: number[];
}

export interface Goods {
  categ: string;
  ginfo: Ginfo[];
}

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  public goods: Goods[]=[];
    //コンポーネント間通信用
  public subject = new Subject<string>();
  public observe = this.subject.asObservable();

  constructor() { }

  resetGoods() : void { this.goods = new Array(); }
  getGoods(){ return this.goods; }
  addGoods(pgoods:Goods) : void {
　　let i:number = this.goods.findIndex(obj => obj.categ == pgoods.categ);
    if ( i > -1 ){
　　　　this.goods[i].ginfo.push(pgoods.ginfo[0]);　　　
    }else{
　　　　this.goods.push(pgoods);
    }
  }
  decreGoods(ctg:string,gds:string,j:number,dec:number) : void {
　　let i:number = this.goods.findIndex(obj => obj.categ == ctg);
　　this.goods[i].ginfo[j].stock +=dec;
  }
}
