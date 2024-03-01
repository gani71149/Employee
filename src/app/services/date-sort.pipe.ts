import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {

  transform(array: any[], order: string = 'asc'): any[] {
    if (!array || array.length <= 1) {
      return array;
    }

    return array.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

}
