import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // const span = document.createElement('span')
    // span.setAttribute("class", "mouse-hover");
    // span.setAttribute("id", "mouserHover");
    // document.body.append(span);
    
    // document.body.style.cursor = 'none !impotant';
    // const mouserHover = document.getElementById('mouserHover') as HTMLBodyElement;
    // document.addEventListener('mousemove', ($event) => {
    //   console.log($event);
    //   mouserHover.style.left = `${$event.pageX}px`;
    //   mouserHover.style.top = `${$event.pageY}px`;
    // })
  }


}
