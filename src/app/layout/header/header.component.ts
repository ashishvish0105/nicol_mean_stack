import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstoreService } from 'src/app/core/service/localstore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userinfo: any;
  username = 'ashish';
  userTupe = 'admin login'
  toggelClass = false;

  constructor(
    private router: Router,
    private localstoreService: LocalstoreService
  ) { }

  ngOnInit(): void {
    this.userinfo = this.localstoreService.getUserLocalStorageGet('logindata');
  }

  toggleClick() {
    this.toggelClass = !this.toggelClass;
  }

  logoutUser() {
    localStorage.clear();
    if (!localStorage.getItem('logindata')) {
      this.router.navigateByUrl('/login');
    }
  }

  loginUser() {
    if (!localStorage.getItem('logindata')) {
      this.router.navigateByUrl('/login');
    }
  }
}
