import { Component, OnInit, ViewChild } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { ImageSliderComponent } from 'src/app/shared/components/image-slider/image-slider.component';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;
  topMenus: TopMenu[] = [{
    title: '热门',
    link: ''
  }, {
    title: '男装',
    link: ''
  }, {
    title: '百货',
    link: ''
  }, {
    title: '运动',
    link: ''
  }, {
    title: '手机',
    link: ''
  }, {
    title: '家纺',
    link: ''
  }, {
    title: '视频',
    link: ''
  }, {
    title: '电器',
    link: ''
  }, {
    title: '鞋包',
    link: ''
  }, {
    title: '汽车',
    link: ''
  }, {
    title: '水果',
    link: ''
  }, {
    title: '电脑',
    link: ''
  }, {
    title: '内衣',
    link: ''
  }, {
    title: '家装',
    link: ''
  }, {
    title: '母婴',
    link: ''
  }, {
    title: '美妆',
    link: ''
  }, {
    title: '家具',
    link: ''
  }];

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
  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }

  constructor() { }

  ngOnInit() {
  }

}
