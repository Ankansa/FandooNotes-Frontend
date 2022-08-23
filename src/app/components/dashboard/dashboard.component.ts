import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/Data/data.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message:string;
  mobileQuery: MediaQueryList;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private data: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
 
  }



  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  
  value:any = "";

  logOut(){
    localStorage.removeItem('token')
  }

  newMessage() {
    this.data.changeMessage(this.message)
  }

}

