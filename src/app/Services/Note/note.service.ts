import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }

  addnote(data: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    console.log("Data in User services : ", data);
    return this.httpservice.postService('note', data, true, httpOptions)

  }

  getAllNote() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in User services : ", data);
    return this.httpservice.getService('note', true, httpOptions)

  }

}