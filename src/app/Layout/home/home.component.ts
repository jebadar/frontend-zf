import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  
  
}

  ngOnInit() {
    this.toggle()
  }
toggle() {
  //2. Mobile menu
    //Init mobile menu
    
    $(window).load(function(){
      $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
        $('body').removeClass('loading');
      }
      });
    });
    $(document).ready(function() { 
      $("#owl-demo").owlCarousel({
     
        autoPlay: 3000, //Set AutoPlay to 3 seconds
     
        items : 5,
        itemsDesktop : [640,4],
        itemsDesktopSmall : [414,3],
    navigation : true,
        navigationText : ['<span class="fa-stack"><i class="fa  fa-stack-1x"></i><i class="fa fa-angle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa  fa-stack-1x"></i><i class="fa fa-angle-right fa-stack-1x fa-inverse"></i></span>'],
    });
    
    }); 
    $(document).ready(function(){

      $(".detailDiv").hide();
      $('.button').click(function(){
$(".detailDiv").slideToggle();
});

});
}
}
