import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  showParagraph = true;
  students: Array<{id: string, name: string, rating: number}> = [];

  constructor() { }

  ngOnInit(): void {
    this.students.push({id: 'S001', name: 'Manoj', rating: 5});
    this.students.push({id: 'S003', name: 'Gayal', rating: 4});
    this.students.push({id: 'S005', name: 'Pethum', rating: 5});
    this.students.push({id: 'S007', name: 'Dinusha', rating: 2});
  }

  // toggleVisibility() {
  //   this.showParagraph = !this.showParagraph;
  // }
  reloadStudents() {
    this.students = [];
    this.students.push({id: 'S001', name: 'Manoj+', rating: 4});
    this.students.push({id: 'S003', name: 'Gayal', rating: 5});
    this.students.push({id: 'S005', name: 'Pethum', rating: 4});
    this.students.push({id: 'S007', name: 'Dinusha', rating: 5});
    this.students.push({id: 'S008', name: 'Dinusha', rating: 5});
  }

  byId(index: number, s: {id: string, name: string}): string {
    return s.id;
  }

}
