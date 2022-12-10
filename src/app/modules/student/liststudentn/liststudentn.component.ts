import { Component, OnInit } from '@angular/core';
import { IgetAllUser, userData } from 'src/app/models/student/user.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-liststudentn',
  templateUrl: './liststudentn.component.html',
  styleUrls: ['./liststudentn.component.scss']
})
export class ListstudentnComponent implements OnInit {
  alluserdetail: any;

  constructor(private _StudentService: StudentService) { }

  ngOnInit(): void {
    this.getAllUser()
  }
  getAllUser() {
    debugger
    this._StudentService.getAllUser().subscribe((res: IgetAllUser) => {
      if (res) {
        debugger
        this.alluserdetail = res?.data;
      }
    })
  }
}
