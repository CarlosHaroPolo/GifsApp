import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ShearchBoxComponent,
    CartListComponent,
    CardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    HomePageComponent
  ]
})
export class GitsModule { }
