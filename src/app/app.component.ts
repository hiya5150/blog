import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {DummyService} from './model/dummy.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 menu: MenuItem[];
 loggedIn = false;

 constructor(private dummy: DummyService, private router: Router ) {
   this.dummy.setLoginVal(this.loggedIn);
 }

  ngOnInit() {
    this.menu = [
      {label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'}
    ];

  }
  onLog(e) {
    console.log(e);
    this.dummy.setLoginVal(this.loggedIn);
    if(!this.loggedIn) {
      this.router.navigateByUrl('/');
    }
  }
}
