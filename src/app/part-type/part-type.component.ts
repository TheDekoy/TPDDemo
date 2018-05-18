import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { TPDConstants } from '../TPDConstants';
import { PartType } from '../datamodel/part-type';
import { StateService } from '../state.service';

@Component({
  selector: 'app-part-type',
  templateUrl: './part-type.component.html',
  styleUrls: ['./part-type.component.css']
})
export class PartTypeComponent implements OnInit {

  httpHeaders = new HttpHeaders();

  parttype: PartType[] = [];
  showDimmer: boolean = false;

  constructor(private stateService: StateService,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.snackBar.dismiss();

    let url: string = "";

    /**
    * check if category is CUMMINS, or VEE BELTS etc
    */
    let token = this.stateService.category;

    if (token === "CUMMINS") {
      url = TPDConstants.baseurl + "/parttype/" + this.stateService.category + "/" + this.stateService.model + "/" + this.stateService.group + "/n";

    } else if (token === "SILICON HOSE") {
      url = TPDConstants.baseurl + "/parttype/" + this.stateService.category + "/n";

    } else if (token === "VEE BELTS") {
      url = TPDConstants.baseurl + "/parttype/" + this.stateService.category + "/n";

    } else if (token === "FILTERS") {
      url = TPDConstants.baseurl + "/parttype/" + this.stateService.category + "/n";
    } else {

      return;
    }

    url = encodeURI(url);
    console.log(url);

    this.showDimmer = true;
    this.http.get<PartType[]>(url, { headers: this.httpHeaders }).subscribe(
      data => {
        this.parttype = data;
      },
      error => {
        this.showDimmer = false;
        this.openSnackBar("Error getting Part Types !");
      },
      () => {
        this.showDimmer = false;
      }
    );
  }

  clicked(token: string): void {

    console.log("token = [" + token + "]");

    this.stateService.parttype = token;

    this.router.navigate(["/parts"]);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
