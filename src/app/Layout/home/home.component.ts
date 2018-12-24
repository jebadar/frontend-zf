import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {OwlCarousel} from 'ngx-owl-carousel';
import { LayoutService } from '../layout.service';

declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel 
  fun() {
    this.owlElement.next([200])
    //duration 200ms
  }
  object = {          
    link: "http://lorempixel.com/100/100"
  }
  constructor(
    private layoutService: LayoutService
  ) {
}
items = []
itemzs = []  
images = ["/assets/images/movie/movie-sample1.jpg","/assets/images/movie/movie-sample1.jpg","/assets/images/movie/movie-sample1.jpg","/assets/images/movie/movie-sample1.jpg","/assets/images/movie/movie-sample1.jpg","/assets/images/movie/movie-sample1.jpg","/assets/images/movie/movie-sample1.jpg"]
ngOnInit() {
    
    
  }
toggle() {
    
    // $(window).load(function(){
      $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
        $('body').removeClass('loading');
      }
      });
    // });
    // $(document).ready(function() { 
    //   $("#owl-demo").owlCarousel({
     
    //     autoPlay: 3000, 
     
    //     items : 5,
    //     itemsDesktop : [640,4],
    //     itemsDesktopSmall : [414,3],
    // navigation : true,
    //     navigationText : ['<span class="fa-stack"><i class="fa  fa-stack-1x"></i><i class="fa fa-angle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa  fa-stack-1x"></i><i class="fa fa-angle-right fa-stack-1x fa-inverse"></i></span>'],
    // });
    
    // }); 
    $('.login-window').click(function (e){
      e.preventDefault();
      $('.overlay').removeClass('close').addClass('open');
    });
    // $(document).ready(function(){

      $(".detailDiv").hide();
      $('.button').click(function(){
      $(".detailDiv").slideToggle();
      });

// });
}
}
