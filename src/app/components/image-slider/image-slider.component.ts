import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

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
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  intervalId;
  selectedIndex = 0;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      // tslint:disable-next-line:max-line-length
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length);
    }, this.intervalBySeconds * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - Math.abs(idx) % this.sliders.length;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  handleScroll(event) {
    const ratio = event.target.scrollLeft * this.sliders.length / event.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
    console.log(this.selectedIndex);
  }
}
