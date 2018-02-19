import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TapComponent } from './tap/tap.component';
import { PayComponent } from './pay/pay.component';
import { MapComponent } from './map/map.component';
import { TravelComponent } from './travel/travel.component';
import { AccountComponent } from './account/account.component';
import { NotiComponent } from './noti/noti.component';
import { HistoryComponent } from './history/history.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: 'index',
    component: HomeComponent
  },
  {
    path: 'index/main/pay',
    component: PayComponent
  },
  {
    path: 'index/main',
    component: MapComponent
  },
  {
    path: 'index/main/account',
    component: AccountComponent
  },
  {
    path: 'index/main/travel',
    component: TravelComponent
  },
  {
    path: 'index/main/notifications',
    component: NotiComponent
  },
  {
    path: 'index/main/history',
    component: HistoryComponent
  },
  {
    path: 'index/main/help',
    component: HelpComponent
  },
  {
    path: '**',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }