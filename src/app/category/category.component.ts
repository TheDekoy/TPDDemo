import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { TPDConstants } from '../TPDConstants';
import { Category } from "../datamodel/category";
import { StateService } from '../state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  httpHeaders = new HttpHeaders();

  category: Category[] = [];
  showDimmer: boolean = false;

  constructor(private stateService: StateService,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.snackBar.dismiss();

    let url: string = TPDConstants.baseurl + "/category/n";
    url = encodeURI(url);
    console.log(url);

    this.showDimmer = true;
    this.http.get<Category[]>(url, { headers: this.httpHeaders }).subscribe(
      data => {
        this.category = data;
      },
      error => {
        this.showDimmer = false;
        this.openSnackBar("Error getting Categories !");
      },
      () => {
        this.showDimmer = false;
      }
    );
  }

  clicked(token: string): void {

    console.log("token = [" + token + "]");

    this.stateService.category = token;
    /**
     * check if category is CUMMINS, or VEE BELTS etc
     */
    if (token === "CUMMINS") {
      console.log("enginemodels");
      this.router.navigate(["/enginemodels"]);

    } else if (token === "SILICON HOSE") {
      this.router.navigate(["/parttypes"]);

    } else if (token === "VEE BELTS") {
      this.router.navigate(["/parttypes"]);

    } else if (token === "FILTERS") {
      this.router.navigate(["/parttypes"]);

    } else {
      this.router.navigate(["/parts"]);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
