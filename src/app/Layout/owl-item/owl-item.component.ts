import { Component, OnInit, Input } from '@angular/core';

import { Constants } from '../../constants'

@Component({
  selector: 'owl-item-component',
  templateUrl: './owl-item.component.html',
  styleUrls: ['./owl-item.component.css']
})
export class OwlItemComponent implements OnInit {
@Input() itemInfo = {};
  constructor() { }

  assetUrl = ""
  ngOnInit() {
    this.assetUrl = Constants.ASSET_URL;
    // console.log(this.itemInfo.description)
    // console.log(this.itemInfo.title)

  }

}
