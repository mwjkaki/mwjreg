import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Count {
  ctg: string;
  gds: string;
  gnm: string;
  prc: number[];
  cnt: number;
  idx: number;
}
export interface Cnthead {
  sum: number;
  zei: number;
  azu: number;
  rat: number;
  tkbn:string;
  zkbn:string;
}

@Injectable({
  providedIn: 'root'
})
export class CountsService {
  public cnthead:Cnthead ={
    sum:0,
    zei:0,
    azu:10000,
    rat:10,
    tkbn:'1',
    zkbn:'1'
  };
  public items: Count[]=[];
    //コンポーネント間通信用
  public subject = new Subject<string>();
  public observe = this.subject.asObservable();
  
  constructor() { }
  getList() :any { return this.items; }
  setKbn(tkbn:string,zkbn:string) :void {
    this.cnthead.tkbn = tkbn;
    this.cnthead.zkbn = zkbn;
    for(let i = 0; i < this.items.length; i++) {
      this.items[i].prc[0] = this.items[i].prc[+this.cnthead.tkbn];
    }
    this.calc_sum();
  }
  clear() {
    this.cnthead.sum = 0;
    this.cnthead.zei = 0;
    this.cnthead.azu = 10000;
    this.cnthead.rat = 10;
    this.cnthead.tkbn = "1";
    this.cnthead.zkbn = "1";
    this.items = new Array();
  }
  addList(Ctg :string, Gds :string, Gnm :string, Prc :number[], Idx:number) :void {
    let i:number = this.items.findIndex(k => k.gds==Gds)
    if  (i == -1) {
      Prc[0] = Prc[this.cnthead.tkbn];
      let adGds:Count = {ctg:Ctg,gds:Gds,gnm:Gnm,prc:Prc,cnt:1,idx:Idx};
      this.items.push(adGds);
    } else {
      this.items[i].cnt += 1;
    }
    this.calc_sum()
  }
  delList(Gds :string) :void {
    let i:number = this.items.findIndex(k => k.gds==Gds)
    this.items.splice(i,1);
    this.calc_sum();
  }
  disCount(r :number) :void {
    for(let i = 0; i < this.items.length; i++) {
      this.items[i].prc[0] = this.items[i].prc[0] - Math.floor(this.items[i].prc[0] * r / 100);
    }
    this.calc_sum();
  }
  calc_sum() :void {
    this.cnthead.sum=0;
    this.cnthead.zei=0;
    for(let i = 0; i < this.items.length; i++) {
      this.cnthead.sum += this.items[i].prc[0] * this.items[i].cnt;
    }
    if(this.cnthead.zkbn = "0"){
      this.cnthead.zei = Math.floor(this.cnthead.sum * this.cnthead.rat / 100);
      this.cnthead.sum = this.cnthead.sum + this.cnthead.zei;
    }else{
      this.cnthead.zei = Math.floor(this.cnthead.sum * this.cnthead.rat / (100 + this.cnthead.rat));
    }
    this.cnthead.azu =  Math.ceil(this.cnthead.sum / 10000 ) * 10000;
  }
}
