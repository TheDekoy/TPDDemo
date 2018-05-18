import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { RetailportalComponent } from './retailportal/retailportal.component'
import { TradeportalComponent } from './tradeportal/tradeportal.component'
import { FullpartsComponent } from './fullparts/fullparts.component'
import { ClearanceComponent } from './clearance/clearance.component'

const routes: Routes = [
  { path: '', redirectTo: '/retailportal', pathMatch: 'full'},
  { path: 'retailportal', component: RetailportalComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'trade', component: TradeportalComponent },
  { path: 'fullparts', component: FullpartsComponent },
  { path: 'clearance', component: ClearanceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}