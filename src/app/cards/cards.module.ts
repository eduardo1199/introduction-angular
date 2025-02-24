import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardPurpleComponent } from '../card-purple/card-purple.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardPurpleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardPurpleComponent
  ]
})
export class CardsModule { }
