import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [{
  path: 'home',
  component: HomeContainerComponent,
  children: [
    {
      path: '',
      redirectTo: 'hot',
      pathMatch: 'full'
    },
    {
      path: ':tabLink',
      component: HomeDetailComponent,
      children: [
        {
          path: 'grand',
          component: HomeGrandComponent
        }
      ]
    }
  ]
}, {
  path: 'change-detection',
  pathMatch: 'full',
  component: ParentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
