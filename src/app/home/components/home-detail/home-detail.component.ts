import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, ImageSliderComponent } from 'src/app/shared/components/image-slider/image-slider.component';
import { Channel } from 'src/app/shared/components/horizontal-grid/horizontal-grid.component';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;
  channels: Channel[] = [];

  imageSliders: ImageSlider[] = [];
  selectedTabLink: string;
  constructor(private activatedRouter: ActivatedRoute, private homeService: HomeService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.homeService.getChannels().subscribe(channels => {
      this.channels = channels;
      this.cd.markForCheck();
    });
    this.homeService.getBanners().subscribe(imagesliders => {
      this.imageSliders = imagesliders;
      this.cd.markForCheck();
    });
    this.activatedRouter.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });
  }

}
