import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent implements OnInit {

  highlight = false;
  primary = false;
  underline = false;
  h1Classes = {};

  // h1Classes = {
  //   highlight: this.highlight,
  //   primary: this.primary,
  //   underline: this.underline
  // };


  constructor() { }

  ngOnInit(): void {
    this.setH1Classes();
  }


  setH1Classes(): void {
    this.h1Classes = {
      highlight: this.highlight,
      primary: this.primary,
      underline: this.underline
    }
  }
}
