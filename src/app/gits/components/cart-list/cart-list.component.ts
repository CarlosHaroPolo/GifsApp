import { Component, Input } from '@angular/core';
import { GifsServiceTsService } from '../../services/gifs.service.ts.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gits-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  @Input()
  public gifs: Gif[] = [];
}
