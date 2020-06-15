import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Posレジアプリ';
  private routeLinks: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,private auth: AuthService) {
    this.routeLinks = [
      { label: 'Data', link: 'tab01', icon: 'dashboard' },
      { label: 'Regi', link: 'tab02', icon: 'shopping_cart' },
      { label: 'List', link: 'tab03', icon: 'list' },
      { label: 'Expo', link: 'tab04', icon: 'save_alt' }
    ];
  }
  ngOnInit(): void {
    this.auth.localAuthSetup();
  }
}
