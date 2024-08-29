import { Component } from '@angular/core';
import { GifsServiceTsService } from '../../services/gifs.service.ts.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

//vamos a inyectar nuestro servicio
constructor (private gitsServer :GifsServiceTsService){}


get gists():Gif[] {
  return this.gitsServer.gifList ;
}





}
