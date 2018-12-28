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
    this.changeSlide()
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
    {img: "/assets/images/243x364_try.png"},
    {img: "/assets/images/243x364_try.png"},
    {img: "/assets/images/243x364_try.png"},
    {img: "/assets/images/243x364_try.png"},
    {img: "/assets/images/243x364_try.png"},
    {img: "/assets/images/243x364_try.png"},
    {img: "/assets/images/243x364_try.png"},
    {img: "/assets/images/243x364_try.png"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};
  changeSlide() {
    var counter = 0
    setInterval(() => {
      if(counter == 0) 
        this.slides[counter].img = "/assets/images/243x364_dark.png"
        else {
          this.slides[counter-1].img = "/assets/images/243x364_try.png"
          this.slides[counter].img = "/assets/images/243x364_dark.png"
        }
        counter ++
        if(counter > 7) {
          counter = 0
        }
    },300)
  }
  addSlide() {
    this.slides.push({img: ""})
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