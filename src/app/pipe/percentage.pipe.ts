import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string {
    return `${value}%`;
  }

}
