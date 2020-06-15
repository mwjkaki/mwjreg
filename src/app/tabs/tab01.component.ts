import { Component, OnInit} from '@angular/core';
import { Ginfo,Goods,GoodsService } from '../services/goods.service';
import { Header,HeaderService } from '../services/header.service';
import { SelVal,Cust, CustomerService } from '../services/customer.service';
import { CountsService } from '../services/counts.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import * as Query from '../graph-ql/queries';
import { Stock } from '../graph-ql/Entities';

@Component({
  selector: 'app-tab01',
  templateUrl: './tab01.component.html',
  styleUrls: ['./tab01.component.scss']
})
export class Tab01Component implements OnInit {
  // public hdNewSh: Header[];
  // public sthd: Header;
  public RDVAL: string;
  public chSHOP: boolean;
  public chCMPE: boolean;
  public placehold: string;
  public headid: number;
  constructor(public goodsservice: GoodsService,
              public headerservice: HeaderService,
              public custservice: CustomerService,
              public cntservice: CountsService,
              private apollo: Apollo) { }

  ngOnInit() {
    this.RDVAL = "1";
    this.chSHOP = true;
    this.placehold = 'データ選択';
    this.get_Header();
  }
  read_Data(value:number):void {
    let sthds :Header[] = this.headerservice.headers.filter(function(item:Header, index:number){
      if (item.headid == value) return true;}
    );
    // console.log('sthds',sthds)
    this.headerservice.header = sthds[0];
    // console.log('srv.header',this.headerservice.header)
    this.apollo.mutate<any>({
      mutation: Query.UpdateStatus,
      variables: { 
        headid: this.headid ,
        now : new Date()
        },
       }).subscribe(({ data, loading }) => {
          console.log('got data', data);
       },(error) => {
          console.log('there was an error sending the query', error);
       });
    this.apollo.watchQuery<any>({
      query: Query.GetQuery2,
      variables: { 
        headid: this.headid
      },
    })
      .valueChanges
      .subscribe(({ data }) => {
        this.goodsservice.resetGoods();
        // let stInf: Ginfo;
        // let itPrc: number[]= new Array(5);
        let adInf: Ginfo[];
        let adBtn: Goods;        
        for ( let i=0;i<data.tblstock.length;i=i+1 ){
          // console.log('got data', i,data.tblstock[i]);
          // itPrc[0] = data.tblstock[i].price1
          // itPrc[1] = data.tblstock[i].price2
          // itPrc[2] = data.tblstock[i].price3
          // itPrc[3] = data.tblstock[i].price4
          // itPrc[4] = data.tblstock[i].price5
          adInf = [{ gcode:data.tblstock[i].gcode,gname:data.tblstock[i].gname,stock:+data.tblstock[i].stock,
            price:[data.tblstock[i].price1,data.tblstock[i].price2,data.tblstock[i].price3,data.tblstock[i].price4,data.tblstock[i].price5]}];
          // adInf[0]=stInf
          adBtn = { categ: data.tblstock[i].categ, ginfo: adInf } ;
          this.goodsservice.addGoods(adBtn); 
         }
         this.goodsservice.subject.next();
      });
      // console.log('sthd',this.headerservice.header)
      let adCus: Cust;
      let adSel: SelVal;   
      if (this.headerservice.header.type == 'SHOP'){
        this.apollo.watchQuery<any>({
          query: Query.GetQuery3,
          variables: { 
            scode: this.headerservice.header.code
            },
        })
        .valueChanges
        .subscribe(({ data }) => {
          this.custservice.reset();
          for ( let i=0;i<data.tblcustomer.length;i=i+1 ){
            adSel = { value:data.tblcustomer[i].mcode, viewValue:data.tblcustomer[i].name}
            adCus = { code:data.tblcustomer[i].mcode,tkbn:data.tblcustomer[i].tkbn,zkbn:data.tblcustomer[i].zkbn };
            this.custservice.addSval(adSel);
            this.custservice.addCust(adCus);
          }
        });
      }
      else {
        this.custservice.reset();
        adSel = { value:this.headerservice.header.code, viewValue:'大会'}
        adCus = { code:this.headerservice.header.code, tkbn:'1', zkbn:'1' };
        this.custservice.addSval(adSel);
        this.custservice.addCust(adCus);
        this.cntservice.setKbn("1","1");
        console.log('tai',this.custservice)     
      }
    
  }
  onChange():void  {
    this.placehold = 'データ選択';
    // console.log('onchangeログ：',this.headerservice.headers)
    this.get_Header();
  }
  // onSelect():void  {
  //   if (this.hdNewSh !== undefined) {
  //     // console.log('onSelectログ：',this.headerservice.headers)
  //     if (this.hdNewSh.length == 0){
  //       this.placehold = '該当データなし';}
  //   }
  // }
  get_Header():void {
  　let lcstatus : String;
  　let lctype   : String;
    if (this.RDVAL == "1") {
      lcstatus = 'NEW';
    } else {
      lcstatus = 'EDIT';
    }
    if (this.chSHOP && this.chCMPE) {

    } else if (this.chSHOP) {
      lctype = 'SHOP';
    } else if (this.chCMPE) {
      lctype = 'CMPE';
    }
    this.headerservice.QueryHeaders(lcstatus,lctype)
      .subscribe(({ tblheader }) => {
        // console.log('tab01.ts',tblheader);
        this.headerservice.headers = tblheader;
        if (tblheader.length == 0){
          this.placehold = '該当データなし';
        } else {
          this.placehold = 'データ選択';
        }
      });
    // this.apollo.watchQuery<any>({
    //   query: Query.GetQuery1,
    //   variables: { 
    //     status : lcstatus ,
    //     type : lctype
    //     },
    //   })
    //   .valueChanges
    //   .subscribe(({ data }) => {
    //     this.hdNewSh = data.tblheader
    //     if (data.tblheader.length == 0) {
    //       this.placehold = '該当データなし';
    //       }
    //     }
    //   );
  }

}
