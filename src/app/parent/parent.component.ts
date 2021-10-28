import {Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  inCart = 2;
  @ViewChild(ChildComponent)
  myChild!: ChildComponent;

  changeCart(emitValue: number) {
    this.inCart += emitValue;
  }

  removeFromCart() {
    if (this.inCart === 0) return;
    this.inCart--;
  }

  constructor() {
    console.log("Constructor");
    console.log(this.myChild);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges");
    console.log(this.myChild);
  }

  ngOnInit(): void {
    console.log("onInit");
    // setTimeout(()=>{
    //   console.log(this.myChild.stock);
    // }, 100);

  }

  ngDoCheck(): void {
    console.log("onDoCheck");
    console.log(this.myChild);
  }

  ngAfterContentInit(): void {
    console.log("After Content Init");
    console.log(this.myChild);
  }

  ngAfterContentChecked(): void {
    console.log("After Content Checked");
    console.log(this.myChild);
  }

  ngAfterViewInit(): void {
    console.log("After view Init");
    console.log(this.myChild);
  }

  ngAfterViewChecked(): void {
    console.log("After View Checked");
  }

  ngOnDestroy(): void {
    console.log("On Destroy")
  }

}
