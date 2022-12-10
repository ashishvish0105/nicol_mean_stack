import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-title-heading-box',
  templateUrl: './sub-title-heading-box.component.html',
  styleUrls: ['./sub-title-heading-box.component.scss']
})
export class SubTitleHeadingBoxComponent implements OnInit {

  @Input() subTitle = "login";
  @Input() nomalTile = "Login To";
  @Input() specialTitle = "nicon";
  @Input() Isbutton = false;
  @Input() subTitlebutton = 'button';
  @Input() description: string | boolean = 'Quis semper nascetur neque nunc nisl fermentum sed maecenas. Risus pellentesque fusce et, quis id ut nam. A dictum dictumst diam ut blandit ut nunc. Nulla nec arcu viverra mauris';
  constructor() { }

  ngOnInit(): void {
  }

}
