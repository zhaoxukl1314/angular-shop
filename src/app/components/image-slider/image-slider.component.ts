import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let i = 0;
    setInterval(() => {
      // tslint:disable-next-line:max-line-length
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', (++i % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length);
    }, this.intervalBySeconds * 1000);
  }
}
