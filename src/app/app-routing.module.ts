import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { RetailportalComponent } from './retailportal/retailportal.component'
import { TradeportalComponent } from './tradeportal/tradeportal.component'
import { FullpartsComponent } from './fullparts/fullparts.component'
import { ClearanceComponent } from './clearance/clearance.component'
import { CategoryComponent } from './category/category.component';
import { EngineModelComponent } from './engine-model/engine-model.component';
import { PartGroupComponent } from './part-group/part-group.component';
import { PartTypeComponent } from './part-type/part-type.component';
import { ShowPartsComponent } from './show-parts/show-parts.component';

const routes: Routes = [
  { path: 'retailportal', component: CategoryComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'trade', component: TradeportalComponent },
  { path: 'fullparts', component: FullpartsComponent },
  { path: 'clearance', component: ClearanceComponent },
  //  { path: "category", component: CategoryComponent },
  { path: "enginemodels", component: EngineModelComponent },
  { path: "partgroups", component: PartGroupComponent },
  { path: "parttypes", component: PartTypeComponent },
  { path: "parts", component: ShowPartsComponent },
  { path: '', redirectTo: '/retailportal', pathMatch: 'full' },
  { path: "**", redirectTo: '/retailportal' }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}