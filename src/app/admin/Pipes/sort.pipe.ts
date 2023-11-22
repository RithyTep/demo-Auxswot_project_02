import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], property: string): any[] {
    if (!value || value.length <= 1) {
      return value;
    }

    return value.sort((a, b) => {
      if (property === 'dateCreated') {
        // Sort by date
        let dateA = moment(a[property]);
        let dateB = moment(b[property]);
        let diff = dateB.diff(dateA);
        return diff;
      } else {
        // Sort by string property
        return a[property] > b[property] ? 1 : -1;
      }
    });
  }
  
}

