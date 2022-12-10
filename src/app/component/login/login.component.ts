import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { LocalstoreService } from 'src/app/core/service/localstore.service';

const userdata = require('../../core/userlogin.json')
// import { GoogleLoginProvider, SocialAuthService } from '../../core/service/angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router,
    private socialAuthService: SocialAuthService,
    private fb: FormBuilder,
    private localstoreService: LocalstoreService) { }

  ngOnInit(): void {
    this.changeExtraMenuBtn();
    // this.mouserHoverevent();

    this.loginForm = this.fb.group({
      email: new FormControl('ashish01@gmail.com'),
      password: new FormControl('ashish@0105')
    })
    console.log(userdata)
  }

  changeExtraMenuBtn() {
    const extraMenuBtn = document.getElementById('extraMenuBtn') as any;
    const formSimpleLogin = document.getElementById('formSimpleLogin') as HTMLElement;
    const advanceLogin = document.getElementById('advanceLogin') as HTMLElement;
    let onclick = false;

    extraMenuBtn.addEventListener('click', function () {
      if (onclick = !onclick) {
        formSimpleLogin.style.display = 'none'
        advanceLogin.style.display = 'block'
      } else {
        formSimpleLogin.style.display = 'block'
        advanceLogin.style.display = 'none'
      }
    })
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        console.log(res)
        this.router.navigate(['dashboard'])
      });

  }

  loginOutWithGoogle(): void {
    this.socialAuthService.signOut()
      .then(() => this.router.navigate(['dashboard']));
  }

  loginFormData(data: {
    email: string,
    password: string
  }) {
    userdata.data.forEach((element: {
      username: string
      password: string
      email: string
    }) => {
      const logindata = "logindata";

      if ((element.email == data.email) && element.password == data.password) {
        this.localstoreService.setUserLocalStorageGet(logindata, element);
        const data = this.localstoreService.getUserLocalStorageGet(logindata);
        if (data) {
          if (data) {
            this.router.navigateByUrl('/dashboard');
          }
        }
      }
    });
  }

  showPassword(data: any) {
    if (data.type === "text") {
      data.type = "password";
    }
    else {
      data.type = "text"
    }
  }


}
