import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Goods, GoodsService } from '../services/goods.service';
import { Count, CountsService } from '../services/counts.service';
// import { Hist, HistoryService } from '../services/history.service';
import { SelVal,Cust, CustomerService } from '../services/customer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab02',
  templateUrl: './tab02.component.html',
  styleUrls: ['./tab02.component.scss']
})
export class Tab02Component implements OnInit {
  // @ViewChild('azuEL', {static: false}) elAzu:ElementRef;
  // @ViewChild('ratEL', {static: false}) elRat:ElementRef;
  public neb:number = 10;
  public mem:string;
  public cus:string = "119908";
  public tkbn:string = "1";
  public zkbn:string = "1";
  public payt:string;
  constructor(public auth: AuthService,
              public goodsservice: GoodsService,
              public cntservice: CountsService,
              public custservice: CustomerService) { }

  ngOnInit() {
  }
  // ngAfterViewInit() {
  //   console.log('afterviewinit',this.elAzu);
  //   this.elAzu.nativeElement.value="10,000";
  //   // this.elAzu.nativeElement.blur();
  //   this.elRat.nativeElement.focus();
  // }  
  disCount(i :number) {
    this.cntservice.disCount(i);
    this.cntservice.subject.next();
  }
  setKbn(event){
    this.tkbn = this.custservice.getTkbn(event.value);
    this.zkbn = this.custservice.getZkbn(event.value);
    this.cntservice.setKbn(this.tkbn,this.zkbn);
    this.cntservice.subject.next();
  }
  addList(Gds :string, Gnm :string, Prc :number[], Cat :string, Idx :number) {
    this.cntservice.addList(Cat,Gds,Gnm,Prc,Idx);
    this.goodsservice.decreGoods(Cat,Gds,Idx,-1);
    this.cntservice.subject.next();
    this.goodsservice.subject.next();
  }
  addHist(){
    this.auth.setLc();
  }
}
