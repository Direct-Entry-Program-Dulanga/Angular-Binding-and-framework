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

  highlight2 = true;
  primary2 = false;
  underline2 = false;
  h1Styles = {};


  constructor() { }

  ngOnInit(): void {
    this.setH1Classes();
    this.setH1Styles();
  }


  setH1Classes(): void {
    this.h1Classes = {
      highlight: this.highlight,
      primary: this.primary,
      underline: this.underline
    }
  }

  setH1Styles(): void {
    this.h1Styles = {
      'background-color': this.highlight2 ? 'yellow': 'white',
      color: this.primary2 ? 'blue': 'black',
      'text-decoration': this.underline2 ? 'underline': 'none'
    };
  }
}
