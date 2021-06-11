import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss','./landing-page-resp.component.scss']
})
export class LandingPageComponent implements OnInit {

  highlights = [
    {
      title: 'Familia',
      text: `Integer scelerisque nulla ut laoreet consequat. Quisque euismod, libero at pretium fermentum, enim dolor scelerisque est, ut posuere ligula dui nec nunc. `,
      image: 'https://image.freepik.com/foto-gratis/familia-moviendose-usando-cajas_1157-35481.jpg',
      aligment: 'left'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
