import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  

  private _category: string;
  private _group: string;
  private _parttype: string;
  private _model: string;
  private _clearance: string;
  private _searchstring: string;

  constructor() {
    //        console.log("state service constructor");
    this._category = "";
    this._model = "";
    this._group = "";
    this._parttype = "";
    this._clearance = "";
    this._searchstring = "";
  }

  set category(value: string) {
    this._category = value;
  }

  get category(): string {
    return this._category;
  }

  set group(value: string) {
    this._group = value;
  }

  get group(): string {
    return this._group;
  }

  set model(value: string) {
    this._model = value;
  }

  get model(): string {
    return this._model;
  }

  set parttype(value: string) {
    this._parttype = value;
  }

  get parttype(): string {
    return this._parttype;
  }

  set clearance(value: string) {
    this._clearance = value;
  }

  get clearance(): string {
    return this._clearance;
  }

  set searchstring(value: string) {
    this._searchstring = value;
  }

  get searchstring(): string {
    return this._searchstring;
  }


}
