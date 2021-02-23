import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl = "../assets/album.json";

  getAlbum(id: number){
    return this._http.get(this._albumUrl)
    .map(res => {
      return res.json();
    });
  }



}
