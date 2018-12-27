import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Constants } from '../../constants'
import { debug } from 'util';


@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @ViewChild('slickModal') slickModal;
  constructor(
    private layoutService: LayoutService
  ) { 
    // this.totalItems = this.slides
  }
  items = [];
  totalItems = [];
  assetUrl = "";
  loading:boolean = false;
  ngOnInit() {
    this.assetUrl = Constants.ASSET_URL;
    this.loading = true
    // get movies banners
    this.layoutService.getMovies().subscribe((result:response)=> {
      console.log(result)
      this.totalItems = result.data
      this.loading = false
      // set first 6 elements
      setTimeout(() =>{
        // this.slickModal.slickPlay()
      },500)
    })
  }

  


  slides = [
    {img: "/assets/images/243x364.png"},
    {img: "/assets/images/243x364.png"},
    {img: "/assets/images/243x364.png"},
    {img: "/assets/images/243x364.png"},
    {img: "/assets/images/243x364.png"},
    {img: "/assets/images/243x364.png"}
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