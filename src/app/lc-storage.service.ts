import { Header, HeaderService } from './services/header.service';
import { Goods, GoodsService } from './services/goods.service';
import { Count,Cnthead, CountsService } from './services/counts.service';
import { SelVal,Cust, CustomerService } from './services/customer.service';
import { Injectable } from '@angular/core';

export interface LcSto {
  lcgds: Goods[];
  lched: Header;
  lchds: Header[];
  lccnt: Count[];
  lccnh: Cnthead;
  lccva: SelVal[];
  lccus: Cust[];
}

@Injectable({
  providedIn: 'root'
})
export class LcStorageService {
  public lcSto:LcSto = {
    lcgds: [],
    lched: this.hedsrv.header,
    lchds: [],
    lccnt: [],
    lccnh: this.cntsrv.cnthead,
    lccva: [],
    lccus: []
  };
  constructor(public gdssrv: GoodsService,
              public hedsrv: HeaderService,
              public cntsrv: CountsService,
              public cussrv: CustomerService) { }

  setLcSto(key:string){
    this.lcSto.lcgds = this.gdssrv.goods;
    this.lcSto.lched = this.hedsrv.header;
    this.lcSto.lchds = this.hedsrv.headers;
    this.lcSto.lccnt = this.cntsrv.items;
    this.lcSto.lccnh = this.cntsrv.cnthead;
    this.lcSto.lccva = this.cussrv.sval;
    this.lcSto.lccus = this.cussrv.cust;
    console.log(JSON.stringify(this.lcSto,undefined,1));
  }            

  getLcSto(key:string){}

  delLcSto(key:string){}

}
