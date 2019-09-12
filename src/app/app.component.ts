import { Component } from '@angular/core';
// import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'samplemdb';
  private routeLinks: any[];
  // private activeLinkIndex = 0;
  // private currentRoute = '';

  constructor(
    // private router: Router,
    // private activatedRoute: ActivatedRoute
  ) {
    this.routeLinks = [
      { label: 'data', link: 'tab01' },
      { label: 'regi', link: 'tab02' },
      { label: 'Tab03', link: 'tab03' },
      { label: 'Tab04', link: 'tab04' }
    ];
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentRoute = event.url.slice(1);
    //     console.log(this.currentRoute);
    //     this.routeLinks.forEach((elm, index) => {
    //       if (elm.link === this.currentRoute) {
    //         this.activeLinkIndex = index;
    //       }
    //     });
    //   }
    // });
  }
}
