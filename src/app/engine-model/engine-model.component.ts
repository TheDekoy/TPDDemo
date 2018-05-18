import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { TPDConstants } from '../TPDConstants';
import { EngineModel } from '../datamodel/engine-model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-engine-model',
  templateUrl: './engine-model.component.html',
  styleUrls: ['./engine-model.component.css']
})
export class EngineModelComponent implements OnInit {

  httpHeaders = new HttpHeaders();

  model: EngineModel[] = [];
  showDimmer: boolean = false;

  constructor(private stateService: StateService,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.snackBar.dismiss();

    let url: string = TPDConstants.baseurl + "/model/" + this.stateService.category + "/n";
    url = encodeURI(url);
    console.log(url);

    this.showDimmer = true;
    this.http.get<EngineModel[]>(url, { headers: this.httpHeaders }).subscribe(
      data => {
        this.model = data;
      },
      error => {
        this.showDimmer = false;
        this.openSnackBar("Error getting Engine Models !");
      },
      () => {
        this.showDimmer = false;
      }
    );
  }

  clicked(token: string): void {

    console.log("token = [" + token + "]");

    this.stateService.model = token;

    this.router.navigate(["/partgroups"]);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
