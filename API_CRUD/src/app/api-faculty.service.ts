import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {

  apiUrl = "https://65c33702f7e6ea59682c264f.mockapi.io/Faculty"
  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get(this.apiUrl);
  }

  getById(id:any){
    this._http.get(this.apiUrl+"/"+id);
  }
}
