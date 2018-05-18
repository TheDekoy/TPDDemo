
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RetailportalComponent } from './retailportal/retailportal.component';
import { ClearanceComponent } from './clearance/clearance.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TradeportalComponent } from './tradeportal/tradeportal.component';
import { FullpartsComponent } from './fullparts/fullparts.component';
import { AppRoutingModule } from './app-routing.module';

import { StateService } from './state.service';
import { TpdcustomMaterialModule } from './tpdcustom-material.module';

import { EngineModelComponent } from './engine-model/engine-model.component';
import { PartGroupComponent } from './part-group/part-group.component';
import { PartTypeComponent } from './part-type/part-type.component';
import { ShowPartsComponent } from './show-parts/show-parts.component';
import { CategoryComponent } from './category/category.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    HttpClientModule,
    
    
    AppRoutingModule,
    TpdcustomMaterialModule
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    RetailportalComponent,
    ClearanceComponent,
    QuotesComponent,
    TradeportalComponent,
    FullpartsComponent,
    CategoryComponent,
    EngineModelComponent,
    PartGroupComponent,
    PartTypeComponent,
    ShowPartsComponent
  ],
  bootstrap: [AppComponent],
  providers: [StateService]
})
export class AppModule {}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */