import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FireBaseDataService } from '../fire-base-data.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  userForm!: FormGroup;
  constructor(private fb: FormBuilder, private _fireBaseDataService: FireBaseDataService) { }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: new FormControl('ashihs'),
      lastName: new FormControl('vishwakarma'),
      Email: new FormControl('ashihs@gmail.com'),
      password: new FormControl('ashihs@14710')
    })
  }

  submit(data: any) {
    console.log(data)
    this._fireBaseDataService.createuser(data).subscribe((res) => {
      console.log(res);
    })
  }

}
