import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }

  registration(data: any) {
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log("Data in User services : ", data);
    return this.httpservice.postService('users', data, false, httpOptions)
  }



  login(data: any) {
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log("Data in User services : ", data);
    return this.httpservice.postService('users/login', data, false, httpOptions)
  }
  


  forget(data:any){
    let httpOptions = {
      httpOptions : new HttpHeaders({
        'content-type' : 'application/json',
      })
    }
    console.log("Data in User services : ", data);
    return this.httpservice.postService('users/forgetPass',data,false,httpOptions)
  }


}
