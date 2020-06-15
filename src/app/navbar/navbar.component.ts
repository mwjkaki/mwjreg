import { Component, OnInit ,Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // ユーザー名をナビゲーションバーに表示したい。親コンポーネントから受け取る。
  @Input()
  displayUserName: string;
 
  // HTMLで使う 認証サービスをインジェクション
  constructor(public auth: AuthService) { }

  ngOnInit() {
    const color:string = localStorage.getItem(this.displayUserName + 'MWJPOS_COLOR');
    if ( color !== null ){this.setColor(color);}
  }
  setColor(colorname:string):void {
    var links = document.getElementsByTagName("link"); 
    for(var i=0; i < links.length; i++) {
        var link = links[i];
        if (link.id=='themeAsset') {
          link.href = 'https://unpkg.com/@angular/material/prebuilt-themes/' + colorname + '.css';
        }
      }
    localStorage.setItem(this.displayUserName + 'MWJPOS_COLOR', colorname);
  }

}
