import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.baseUrl
  constructor(private httpClient: HttpClient) { }


  postService(url: string, data: any, token: boolean, httpOptions: any) {
    return this.httpClient.post(this.BaseUrl + url, data, token && httpOptions)
  }

  getService(url: string, token: boolean, httpOptions: any) {
    return this.httpClient.get(this.BaseUrl + url, token && httpOptions)
  }

  putService(url: string, body:any, token: boolean, httpOptions: any) {
    return this.httpClient.put(this.BaseUrl + url, body, token && httpOptions)
  }

  deleteservice(url: string, token: boolean, httpOptions: any) {
    return this.httpClient.delete(this.BaseUrl + url, token && httpOptions)
  }
}
