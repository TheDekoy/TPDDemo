import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { TPDConstants } from '../TPDConstants';
import { PartGroup } from '../datamodel/part-group';
import { StateService } from '../state.service';

@Component({
  selector: 'app-part-group',
  templateUrl: './part-group.component.html',
  styleUrls: ['./part-group.component.css']
})
export class PartGroupComponent implements OnInit {

  httpHeaders = new HttpHeaders();

  group: PartGroup[] = [];
  showDimmer: boolean = false;

  constructor(private stateService: StateService,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.snackBar.dismiss();

    let url: string = TPDConstants.baseurl + "/group/" + this.stateService.category + "/" + this.stateService.model + "/n";
    url = encodeURI(url);
    console.log(url);

    this.showDimmer = true;
    this.http.get<PartGroup[]>(url, { headers: this.httpHeaders }).subscribe(
      data => {
        this.group = data;
      },
      error => {
        this.showDimmer = false;
        this.openSnackBar("Error getting Part Groups !");
      },
      () => {
        this.showDimmer = false;
      }
    );
  }

  clicked(token: string): void {

    console.log("token = [" + token + "]");

    this.stateService.group = token;

    this.router.navigate(["/parttypes"]);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
