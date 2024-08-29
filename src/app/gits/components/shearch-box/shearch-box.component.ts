import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceTsService } from '../../services/gifs.service.ts.service';

@Component({
  selector: 'gits-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrl: './shearch-box.component.css'
})
export class ShearchBoxComponent {

 @ViewChild('txtTagInput')
 tagInput!:ElementRef<HTMLInputElement>;

constructor(private gitsService :GifsServiceTsService){

}



  searchTag(){ //este elemento lo tengo arriba newtag:string

    const newTag=this.tagInput.nativeElement.value;
    this.gitsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
  }
}
