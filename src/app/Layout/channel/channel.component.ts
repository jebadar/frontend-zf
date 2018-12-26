import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Constants } from '../../constants'

@Component({
  selector: 'channel-component',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  @ViewChild('slickModal') slickModal;
  constructor(
    private layoutService: LayoutService
  ) { }
  items = [];
  totalItems = [];
  assetUrl = "";
  ngOnInit() {
    this.assetUrl = Constants.ASSET_URL;
    
    // get movies banners
    this.layoutService.getLiveChannel().subscribe((result:response)=> {
      console.log(result)
      this.totalItems = result.data
      // set first 6 elements
      setTimeout(() =>{
        // this.slickModal.slickPlay()
      },500)
    })
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/777777"},
    {img: "http://placehold.it/350x150/777777"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}

interface response {
  data: []
}