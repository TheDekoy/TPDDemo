import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StateService } from './state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title: string = 'TPD';
  showDimmer: boolean = false;
  searchText: string = "";

  constructor(private stateService: StateService, private router: Router) {
  }

  ngOnInit(): void {

  }

  keyDownFunction(event: KeyboardEvent): void {
    if (event.keyCode == 13) {
      this.testsearch();
    }
  }

  testsearch(): void {

    console.log("testsearch()");
    console.log(this.searchText);

    if (this.searchText.length == 0) return;

    this.stateService.searchstring = this.searchText;

    this.router.navigate(["/parts"]);
  }

}
