import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ScrollableTabComponent } from './components';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { GridItemDirective } from './directives/grid-item.directive';
import { GridItemImageDirective } from './directives/grid-item-image.directive';
import { GridItemTitleDirective } from './directives/grid-item-title.directive';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }
