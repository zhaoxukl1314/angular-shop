import { Component, OnInit, ViewChild } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

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

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
