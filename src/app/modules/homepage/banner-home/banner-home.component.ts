import { Component, OnInit } from '@angular/core';
import { goblelVariable } from 'src/app/core/subjectBeheviours/goblelVariable.service';


@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss']
})
export class BannerHomeComponent implements OnInit {

  othername = "ashish";

  constructor(private _goblelVariable: goblelVariable) {

  }

  ngOnInit(): void {
    this._goblelVariable.subject.subscribe((res) => {
      this.othername = res;
    })
  }

  setsubjecty(data: string) {
    this._goblelVariable.subject.next(data)
  }




}
