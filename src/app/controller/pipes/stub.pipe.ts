import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stub'
})
export class StubPipe implements PipeTransform {

  transform(value: string, len: number): string {
    let words = value.split(' ');
    if (words.length <= len) {
      return value;
    }
    words = words.slice(0, len);
    return words.join(' ') + '...';

  }

}
