import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsServiceTsService } from '../../../gits/services/gifs.service.ts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl:'./sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
constructor(private gitsService :GifsServiceTsService ){
}

 get tags():string[]{
  return this.gitsService.tagHistory;
 }

 selectButton(tag :string ):void{
   this.gitsService.searchTag(tag);

 }

}
