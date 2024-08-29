import { Component, Input, input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'git-card',
  templateUrl: './card.component.html',
})

// este es el componente perzonalizado que se encarga de cargar las imagenes luego que cargue el loude muestra
export class CardComponent  implements OnInit{
  @Input() // es para que te pase la info de git
  public gif!: Gif;// tienes que inializarlo
  //ngOnInit: Se llama una vez que Angular ha terminado de inicializar las propiedades de entrada del componente.
ngOnInit(): void {
  if(!this.gif) throw new Error('Method not implemented.');
}



}
