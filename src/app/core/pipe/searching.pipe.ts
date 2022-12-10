import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(value: any, search: string) {
    console.log(value)
  }

}


// not use pipe  can use a pipe write text info here 
