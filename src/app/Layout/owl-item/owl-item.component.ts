import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
// import {AnimationBuilder} from '@angular/animations';
import { Constants } from '../../constants'

@Component({
  selector: 'owl-item-component',
  templateUrl: './owl-item.component.html',
  styleUrls: ['./owl-item.component.css']
})
export class OwlItemComponent implements OnInit {
@Input() itemInfo = {};
@ViewChild('carousel') private carousel : ElementRef;
  constructor(
  ) { }

  assetUrl = ""
  ngOnInit() {
    this.assetUrl = Constants.ASSET_URL;
    // console.log(this.itemInfo.description)
    // console.log(this.itemInfo.title)

  }

}
