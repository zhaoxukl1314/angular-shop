import { Component, ViewChild } from '@angular/core';
import { TopMenu } from './components/scrollable-tab/scrollable-tab.component';
import { ImageSlider, ImageSliderComponent } from './components/image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @ViewChild('imageSlider') imgSlider: ImageSliderComponent;
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

  imageSliders: ImageSlider[] = [{
    imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    link: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
    caption: '呵呵'
  },{
    imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477690378,3105703100&fm=26&gp=0.jpg',
    link: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477690378,3105703100&fm=26&gp=0.jpg',
    caption: '呵呵1'
  }];
  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }
}
