import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  _title;
  public get title(): string {
    return this._title;
  }

  constructor() {
    this._title = 'hi';
  }

  ngOnInit() {
  }

}
