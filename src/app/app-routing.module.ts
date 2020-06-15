import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab01Component } from './tabs/tab01.component';
import { Tab02Component } from './tabs/tab02.component';
import { Tab03Component } from './tabs/tab03.component';
import { Tab04Component } from './tabs/tab04.component';
// import { ProfileComponent } from './profile/profile.component';
// import { UserAttendanceComponent } from './components/user-attendance/user-attendance.component';
import { CallbackComponent } from './components/auth/callback/callback.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', 
    redirectTo: 'tab01',
    pathMatch: 'full' 
  },
  {
    path: 'tab01',
    component: Tab01Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'tab02',
    component: Tab02Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'tab03',
    component: Tab03Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'tab04',
    component: Tab04Component,
    canActivate: [AuthGuard]
  },
  // {
  //   path: '',
  //   redirectTo: 'user-attendance',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'user-attendance',
  //   component: UserAttendanceComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
