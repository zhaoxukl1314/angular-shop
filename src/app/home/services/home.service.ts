import { Injectable } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Channel } from 'src/app/shared/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/shared/components/image-slider/image-slider.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {
    }

    topMenus: TopMenu[] = [{
        title: '热门',
        link: 'hot',
        id: 1
      }, {
        title: '男装',
        link: 'men',
        id: 2
      }, {
        title: '百货',
        link: 'departments',
        id: 3
      }, {
        title: '运动',
        link: 'sports',
        id: 4
      }, {
        title: '手机',
        link: 'phones',
        id: 5
      }, {
        title: '家纺',
        link: 'jiafang',
        id: 6
      }, {
        title: '视频',
        link: 'videos',
        id: 7
      }, {
        title: '电器',
        link: 'dianqi',
        id: 8
      }, {
        title: '鞋包',
        link: 'shoes',
        id: 9
      }, {
        title: '汽车',
        link: 'cars',
        id: 10
      }, {
        title: '水果',
        link: 'fruits',
        id: 11
      }, {
        title: '电脑',
        link: 'computers',
        id: 12
      }, {
        title: '内衣',
        link: 'neiyi',
        id: 13
      }, {
        title: '家装',
        link: 'jiazhuang',
        id: 14
      }, {
        title: '母婴',
        link: 'mother',
        id: 15
      }, {
        title: '美妆',
        link: 'meizhuang',
        id: 16
      }, {
        title: '家具',
        link: 'jiaju',
        id: 17
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

    getTabs() {
        return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
        // return this.topMenus;
    }

    getChannels() {
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
        // return this.channels;
    }

    getBanners() {
        return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
        // return this.imageSliders;
    }
}
