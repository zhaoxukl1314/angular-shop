import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageSliderComponent } from '../components/image-slider/image-slider.component';
import { ScrollableTabComponent } from '../components';
import { HorizontalGridComponent } from '../components/horizontal-grid/horizontal-grid.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
