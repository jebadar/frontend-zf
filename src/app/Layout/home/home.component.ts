import { Component, OnInit, ViewChild } from '@angular/core';


declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
  ) {
}
ngOnInit() {
this.components.push(this.componentsTotal[0])
}
onScroll() {
  console.log('scrolled!!');
  if(this.components.length != this.componentsTotal.length) {
    this.components.push(this.componentsTotal[this.components.length])
  }
}
components = []
componentsTotal = [
  {
    name:"channel",
    heading:"Live Channel"
  },
  {
    name:"news",
    heading:"News"
  },
  {
    name:"entertainment",
    heading:"Entertainment"
  },
  {
    name:"drama",
    heading:"Drama"
  },
  {
    name:"sports",
    heading:"Sports"
  },
  {
    name:"kids",
    heading:"Kids"
  },
  {
    name:"islamic",
    heading:"Islamic"
  },
  {
    name:"loading",
    heading:"Loading"
  }
]
}
