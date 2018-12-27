import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { LayoutService } from '../layout.service';
import { Constants } from '../../constants'
import { getPluralCategory } from '@angular/common/src/i18n/localization';

@Component({
  selector: 'news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('slickModal') slickModal;
  @Input() category;
  constructor(
    private layoutService: LayoutService
  ) { }
  items = [];
  totalItems = [];
  assetUrl = "";
  loading:boolean = false;
  ngOnInit() {
    this.assetUrl = Constants.ASSET_URL;
    this.loading = true
    if(this.category === 'news') {
      this.layoutService.getNewsChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 
        // set first 6 elements
        setTimeout(() =>{
          // this.slickModal.slickPlay()
        },500)
      })
    } else if(this.category === 'talkshows') {
      this.layoutService.getTalkshowsChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 

        // set first 6 elements
        setTimeout(() =>{
          // this.slickModal.slickPlay()
        },500)
      })
    } else if(this.category === 'entertainment') {
      this.layoutService.getEntertainmentChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 

        // set first 6 elements
        setTimeout(() =>{
          // this.slickModal.slickPlay()
        },500)
      })
    } else if(this.category === 'drama') {
      this.layoutService.getDramaChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 

        // set first 6 elements
        setTimeout(() => {
          // this.slickModal.slickPlay()
        },500)
      })
    }else if(this.category === 'kids') {
      this.layoutService.getKidsChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 

        // set first 6 elements
        setTimeout(() =>{
          // this.slickModal.slickPlay()
        },500)
      })
    }else if(this.category === 'islamic') {
      this.layoutService.getIslamicChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 

        // set first 6 elements
        setTimeout(() =>{
          // this.slickModal.slickPlay()
        },500)
      })
    } else if(this.category === 'sports') {
      this.layoutService.getSportsChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 

        // set first 6 elements
        setTimeout(() =>{
          // this.slickModal.slickPlay()
        },500)
      })
    } else if(this.category === 'channel') {
      this.layoutService.getLiveChannel().subscribe((result:response)=> {
        console.log(result)
        this.totalItems = result.data
        this.loading = false 

        // set first 6 elements
        setTimeout(() =>{
          // this.slickModal.slickPlay()
        },500)
      })
    }
    
  }

  slides = [
    {img: "/assets/images/243x194.77.png"},
    {img: "/assets/images/243x194.77.png"},
    {img: "/assets/images/243x194.77.png"},
    {img: "/assets/images/243x194.77.png"},
    {img: "/assets/images/243x194.77.png"},
    {img: "/assets/images/243x194.77.png"}
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
