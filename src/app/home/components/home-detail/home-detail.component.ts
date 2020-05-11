import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent } from 'src/app/shared/components/image-slider/image-slider.component';
import { Channel } from 'src/app/shared/components/horizontal-grid/horizontal-grid.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;
  channels: Channel[] = [{
    id: 1,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 2,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 3,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 4,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 5,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 6,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 7,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 8,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 9,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 10,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 11,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 12,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 13,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 14,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 15,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }, {
    id: 16,
    icon: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    title: '限时秒杀',
    link: 'hot'
  }];

  imageSliders: ImageSlider[] = [{
    imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    link: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    caption: '呵呵'
  }, {
    imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477690378,3105703100&fm=26&gp=0.jpg',
    link: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477690378,3105703100&fm=26&gp=0.jpg',
    caption: '呵呵1'
  }];
  selectedTabLink: string;
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });
  }

}
