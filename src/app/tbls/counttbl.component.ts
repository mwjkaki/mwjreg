import { Component, OnInit } from '@angular/core';
// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Count, CountsService } from '../services/counts.service';
import { GoodsService } from '../services/goods.service';

@Component({
  selector: 'app-counttbl',
  templateUrl: './counttbl.component.html',
  styleUrls: ['./counttbl.component.scss']
})

// export class CounttblComponent implements AfterViewInit, OnInit {
export class CounttblComponent implements OnInit {
  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: false}) sort: MatSort;
  // @ViewChild(MatTable, {static: false}) table: MatTable<Count>;
    private countDif:number[]=[];
//   dataSource: CounttblDataSource;
   dataSource:MatTableDataSource<Count>;

   displayedColumns = ['gds','gnm','prc','cnt','sum','actionsColumn'];

   constructor(public cntservice: CountsService,public goodsservice: GoodsService) { 
     this.dataSource= new MatTableDataSource<Count>(this.cntservice.items);
   }

  ngOnInit() {
    //他コンポーネントからの更新
    this.cntservice.observe.subscribe(() => this.updateData());
  }
  // ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  // }
  deleteRow(rowid: number){

    if (rowid > -1) {
      console.log('selrow',rowid);
      this.cntservice.items.splice(rowid,1);
    }
    this.updateData();    
  }
  setPrev(i: number, value: number){
    this.countDif[i] = value;
    console.log(this.countDif)
  }
  updateList(i: number, property: string, value: number){
    // const editField = value;
    // console.log('updateList',event);
    this.cntservice.items[i][property] = value;
    if(property=='cnt'){
      this.goodsservice.decreGoods(this.cntservice.items[i].ctg,this.cntservice.items[i].gds,
        this.cntservice.items[i].idx,-1);
      this.goodsservice.subject.next();
    } 
    this.updateData();
  }
  
  updateData(){
    //tableのデータソース更新
    this.cntservice.calc_sum();
    this.dataSource= new MatTableDataSource<Count>(this.cntservice.items);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  log(){
    console.log('tbldata',this.dataSource);
  }

}





