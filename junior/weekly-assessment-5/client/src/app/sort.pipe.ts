import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTopics',
})
export class SortPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.sort((a, b) => {
      return b.votes - a.votes;
    });
  }
}