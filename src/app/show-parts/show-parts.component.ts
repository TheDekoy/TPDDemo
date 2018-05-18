import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatTableDataSource, MatSnackBar } from "@angular/material";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { Part } from "../datamodel/part";
import { StateService } from "../state.service";
import { TPDConstants } from "../TPDConstants";

@Component({
  selector: 'app-show-parts',
  templateUrl: './show-parts.component.html',
  styleUrls: ['./show-parts.component.css']
})
export class ShowPartsComponent implements OnInit {

  httpHeaders = new HttpHeaders();

  displayedColumns: string[] = ["code", "description", "unit", "sell"];
  dataSource: MatTableDataSource<Part>;
  showDimmer: boolean = false;

  constructor(private stateService: StateService,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.snackBar.dismiss();

    let url: string = "";

    if (this.stateService.searchstring != "") {
      url = TPDConstants.baseurl + "/search/" + this.stateService.searchstring + "/n";
      this.stateService.searchstring = "";
    } else {

      /**
      * check if category is CUMMINS, or VEE BELTS etc
      */
      let token = this.stateService.category;
      if (token === "") {
        this.router.navigate(["/retailportal"]);
        return;
      }

      if (token === "CUMMINS") {
        url = TPDConstants.baseurl + "/part/" + this.stateService.category + "/" + this.stateService.model + "/" + this.stateService.group + "/" + this.stateService.parttype + "/n";

      } else if (token === "SILICON HOSE") {
        url = TPDConstants.baseurl + "/part/" + this.stateService.category + "/" + this.stateService.parttype + "/n";

      } else if (token === "VEE BELTS") {
        url = TPDConstants.baseurl + "/part/" + this.stateService.category + "/" + this.stateService.parttype + "/n";

      } else if (token === "FILTERS") {
        url = TPDConstants.baseurl + "/part/" + this.stateService.category + "/" + this.stateService.parttype + "/n";

      } else {
        url = TPDConstants.baseurl + "/part/" + this.stateService.category + "/n";
      }
    }

    url = encodeURI(url);
    console.log(url);

    this.showDimmer = true;
    this.http.get<Part[]>(url, { headers: this.httpHeaders }).subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Part>(data);
      },
      error => {
        this.showDimmer = false;
        this.openSnackBar("Sorry, cannot find any Parts !");
      },
      () => {
        this.showDimmer = false;
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
