import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionpipe'
})
export class PositionpipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.p1 + " , " + value.p2
  }

}
