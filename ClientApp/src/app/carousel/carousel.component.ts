import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'carousel', 
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css']
})
export class Carousel implements OnInit{

    // slides = [img: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((n) => `/assets/exhibit-1/ex${n}.jpg`);

    slides = [
        { img: 'https://via.placeholder.com/600.png/09f/fff' },
        { img: 'https://via.placeholder.com/600.png/021/fff' },
        { img: 'https://via.placeholder.com/600.png/321/fff' },
        { img: 'https://via.placeholder.com/600.png/422/fff' },
        { img: 'https://via.placeholder.com/600.png/654/fff' },
      ];

    slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
    addSlide() {
        const newLocal:string = 'http://placehold.it/350x150/777777';
      this.slides.push({ img: newLocal });
    }
    removeSlide() {
      this.slides.length = this.slides.length - 1;
    }
    slickInit(e: any) {
      console.log('slick initialized');
    }
    breakpoint(e: any) {
      console.log('breakpoint');
    }
    afterChange(e: any) {
      console.log('afterChange');
    }
    beforeChange(e: any) {
      console.log('beforeChange');
    }
    constructor() {}
    ngOnInit(): void {}
}
