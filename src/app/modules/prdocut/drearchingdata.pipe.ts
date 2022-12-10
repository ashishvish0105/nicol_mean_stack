import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drearchingdata'
})
export class DrearchingdataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
