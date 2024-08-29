
import { Injectable } from '@angular/core';
//necesitamos l htpClient
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
}) // cuando haces esto le estas diciendo cuando sea injectado el servicio va ser ejecutado por todo los componentes
export class GifsServiceTsService {
  //es nuestra clave  de
  private apiKey ='XwA3P1Cpa1i1FiZPm2wIanCnjwEsc9xS'
  private _tagHistory:string[]=[];
  private serviceUrl:string ='https://api.giphy.com/v1/gifs';

  public gifList :Gif[]=[];

  //inicilizamos ene l contructor
  constructor(private http:HttpClient) {
     this.loadLocalStorage();

  }
  get tagHistory(){
  // vas a devolver una copia
   return [...this._tagHistory];
}
private organizeHistory(tag:string){
 tag =tag.toLocaleLowerCase();
 if (this._tagHistory.includes(tag)) {
  // lo estas borrando de la parte de busqueda
  this._tagHistory =this._tagHistory.filter((oldTag)=> oldTag !==tag);
 }
 // lo agregas en la primera parte
 this._tagHistory.unshift(tag);

 // quiero limitar solo del 1 al 10
 this._tagHistory = this._tagHistory.splice(0,10)
 this.seveLocalStorage();
}


private seveLocalStorage():void{
  //es algo nativo del javascript
  localStorage.setItem('history',JSON.stringify(this._tagHistory));
}

private loadLocalStorage():void{
  if(  !localStorage.getItem('history')) return ;

  this._tagHistory  = JSON.parse(localStorage.getItem('history')!); // con ! le estas diciendo que va ser obligatorio que va tener valors
  let tag = this._tagHistory[0];
  this.searchTag(tag);
}

/*
// este utilizando fetch y async (javas script es una peticcion lo puedes utilizar normalte
async searchTag(tag:string):Promise<void>{
  if(tag.length===0) return
  this.organizeHistory(tag);
 const  resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=XwA3P1Cpa1i1FiZPm2wIanCnjwEsc9xS&q=perro&limit=10');
 const data = await resp.json();
 console.log(data);
}
*/
//pero usualmente Angular utiliza //ste objeto
async searchTag(tag:string):Promise<void>{
  if(tag.length===0) return
  this.organizeHistory(tag);
  //este es un oservable

  const params = new HttpParams()
  .set('api_key',this.apiKey)
  .set('limit','10')
  .set('q',tag)
  //this.http.get(`${this.serviceUrl}/search?api_key=XwA3P1Cpa1i1FiZPm2wIanCnjwEsc9xS&q=perro&limit=1`).subscribe(
  //el observador es de tipo generico y ya sabemos  que informacion va fluir por este observador
  this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params:params}).subscribe(  // dentro de params puedes enviar los headers
     (resp)=>{   //NORMAL QUE SEA ERROR
      // lo malo es que ts no sabe que tipo de datos son para eso tienes que decirle que tipo de datos tiene
      this.gifList= resp.data ; // vas a pasar toda la informacion de la data


     }
  )

}
}
