import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(
    private layoutService: LayoutService
  ) { }
  items = [];
itemzs = [];
  ngOnInit() {
    // get movies banners
    this.layoutService.getMovies().subscribe((result:response)=> {
      console.log(result)
      this.items = result.data
      // debugger
    })
    setTimeout(() => {
    this.itemzs = [
      {
        poster:"/assets/images/movie/movie-sample1.jpg",
        heading:"Holy Sadie",
        year:"2014",
        description:"Sadie never took her eyes off me.She had a dark soul."
      },{
      poster:"/assets/images/movie/movie-sample2.jpg",
      heading:"Holy Sadie",
      year:"2014",
      description:"Sadie never took her eyes off me.She had a dark soul."
    },
    {
      poster:"/assets/images/movie/movie-sample3.jpg",
      heading:"Holy Sadie",
      year:"2014",
      description:"Sadie never took her eyes off me.She had a dark soul."
    },
    {
      poster:"/assets/images/movie/movie-sample4.jpg",
      heading:"Holy Sadie",
      year:"2014",
      description:"Sadie never took her eyes off me.She had a dark soul."
    },
    {
      poster:"/assets/images/movie/movie-sample5.jpg",
      heading:"Holy Sadie",
      year:"2014",
      description:"Sadie never took her eyes off me.She had a dark soul."
    }
    // ,
    // {
    //   poster:"/assets/images/movie/movie-sample5.jpg",
    //   heading:"Holy Sadie",
    //   year:"2014",
    //   description:"Sadie never took her eyes off me.She had a dark soul."
    // },
    // {
    //   poster:"/assets/images/movie/movie-sample6.jpg",
    //   heading:"Holy Sadie",
    //   year:"2014",
    //   description:"Sadie never took her eyes off me.She had a dark soul."
    // },
    // {
    //   poster:"/assets/images/movie/movie-sample6.jpg",
    //   heading:"Holy Sadie",
    //   year:"2014",
    //   description:"Sadie never took her eyes off me.She had a dark soul."
    // },
    // {
    //   poster:"/assets/images/movie/movie-sample6.jpg",
    //   heading:"Holy Sadie",
    //   year:"2014",
    //   description:"Sadie never took her eyes off me.She had a dark soul."
    // },{
    //   poster:"/assets/images/movie/movie-sample6.jpg",
    //   heading:"Holy Sadie",
    //   year:"2014",
    //   description:"Sadie never took her eyes off me.She had a dark soul."
    // }
  ]
  })
  }

}
interface response {
  data: []
}