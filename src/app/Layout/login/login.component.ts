import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    


$('.overlay-close').click(function (e) {
  e.preventDefault;
  $('.overlay').removeClass('open').addClass('close');

  setTimeout(function(){
      $('.overlay').removeClass('close');}, 500);
});
  }

}