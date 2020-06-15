import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import * as Query from '../graph-ql/queries';

export interface Header {
  headid: number;
  type: string;
  name: string;
  status: string;
  created_at: Date; 
  code: string;
  usr: string;
  denno: number;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public header: Header ={
    headid: 0,
    type:'',
    name:'',
    status:'',
    created_at:new Date(), 
    code:'',
    usr:'',
    denno:0
  };

  public headers: Header[]=[];
  public HeaderSub = new Subject<any>();
  constructor(private apollo: Apollo) {}
  // resetHeader() : void { this.header = {}; }
  getHeader(): Header[] { return this.headers; }
  QueryHeaders(pstatus:String,ptype:String){
    let HeaderSub;
    this.apollo.watchQuery<any>({
      query: Query.GetQuery1,
      variables: { 
        status : pstatus ,
        type : ptype
        },
      })
      .valueChanges
      .subscribe(({ data ,loading }) => {
        //該当データなし表示判定のため、読込完了後に返す
        if (loading == false){
          HeaderSub = data;
          this.headers=data.tblheader;
          this.HeaderSub.next(HeaderSub);
          }
        }
      );
    return this.HeaderSub;
  }
}
