import { Component, OnInit, ViewChild } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  topMenus: TopMenu[] = [];

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getTabs().subscribe(tabs => {
      this.topMenus = tabs;
    });
  }

}
