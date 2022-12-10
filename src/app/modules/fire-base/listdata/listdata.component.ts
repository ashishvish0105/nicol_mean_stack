import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { FireBaseDataService } from '../fire-base-data.service';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.scss']
})
export class ListdataComponent implements OnInit {
  userForm!: FormGroup;
  // listData: any[] = [];
  userinfo: any[] = []


  constructor(private fb: FormBuilder, private _fireBaseDataService: FireBaseDataService) { }

  ngOnInit(): void {
    this.getdata()

    this.userForm = this.fb.group({
      username: new FormControl('ashihs'),
      lastName: new FormControl('vishwakarma'),
      Email: new FormControl('ashihs@gmail.com'),
      password: new FormControl('ashihs@14710'),
      category: new FormControl('man')
    })

  }

  getdata() {
    this._fireBaseDataService.getuser().pipe(map(resdata => {
      let modifydata = [];
      for (const key in resdata) {
        modifydata.push({
          'userid': key,
          ...resdata[key]
        })
      }
      return modifydata
    })).subscribe((res) => {
      this.userinfo = res;
    })
  }

  submit() {
    debugger
    this._fireBaseDataService.createuser(this.userForm.value).subscribe((res) => {
      debugger
      if (res) {
        alert('user register')
        this.getdata()
      } else {
        alert('user not register')
      }
    })

  }

  deleteRecord(userid: any) {
    const data = confirm(' do you sure you wont to delete a data');
    if (data) {
      this._fireBaseDataService.deleteUser(userid).subscribe((res) => {
        console.log(res)
        this.getdata()
      });
    }
  }

  promisefunction() {
    const localdata = new Promise((resolve, reject) => {
      if (true) {
        resolve(this.userinfo)
      }
      else {
        reject('promise not call')
      }
    });

    localdata.then(
      (data) => {
        return data;
      },
      (error) => {
        return error
      })
  }

  editRecord(data: any) {
    console.log(data)

    this._fireBaseDataService.getuser().pipe(map(resdata => {
      let editData = [];
      for (const key in resdata) {
        if (key == data) {
          editData.push({
            'userid': key,
            ...resdata[key]
          })
        }
      }
      return editData
    })).subscribe((res) => {
      console.log(res)
    })
  }


}
