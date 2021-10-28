import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  stock = 6;
  @Output()
  updateCart = new EventEmitter<number>();
  @Input()
  inCart = 0;

  addToCart(): void {
    if ((this.stock - this.inCart) === 0) return;

    this.stock--;
    this.updateCart.emit(1);
  }

  constructor() {
    console.log("Constructor: ", this.inCart);
    console.log("Child: Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child: onChanges", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit: ", this.inCart);
    console.log("Child: onInit");
  }

  ngDoCheck(): void {
    console.log("Child: onDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Child: After Content Init");
  }

  ngAfterContentChecked(): void {
    console.log("Child: After Content Checked");
  }

  ngAfterViewInit(): void {
    console.log("Child: After view Init");
  }

  ngAfterViewChecked(): void {
    console.log("Child: After View Checked");
  }

  ngOnDestroy(): void {
    console.log("Child: On Destroy")
  }
}
