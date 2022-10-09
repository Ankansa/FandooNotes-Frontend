import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { HttpService } from '../Http/http.service';




@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }

  private _refreshRequired=new Subject<void>()
  get RefreshRequired(){
    return this._refreshRequired;
  }

  addnote(data: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    console.log("Data in User services : ", data);
    return this.httpservice.postService('note', data, true, httpOptions).pipe(
      tap(()=>{
        this.RefreshRequired.next();
      })
    )

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

  trashNote(id: any) {
    // let url='movetrash/'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in User services : ", data);
    return this.httpservice.putService("note/movetrash/" + id,null, true, httpOptions)

  }




  update(id:any,body:any){
    let httpOptions= {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpservice.putService("note/"+id,body,true,httpOptions)
  }




  archivenote(id: any) {
    // let url='movetrash/'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in User services : ", data);
    return this.httpservice.putService("note/archive/" + id,null, true, httpOptions)

  }



  unarchivenote(id: any) {
    // let url='movetrash/'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in User services : ", data);
    return this.httpservice.putService("note/unarchive/" + id,null, true, httpOptions)

  }


  deleteNote(id: any) {
    // let url='movetrash/'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in User services : ", data);
    return this.httpservice.deleteservice("note/" + id, true, httpOptions)

  }


  restoreTrash(id: any) {
    // let url='movetrash/'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in User services : ", data);
    return this.httpservice.putService("note/removetrash/" + id,null, true, httpOptions)

  }




  changeColor(id: any,colorCode:any) {
    // let url='movetrash/'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in User services : ", data);
    return this.httpservice.putService("note/colour/" + id,colorCode, true, httpOptions)

  }


}