import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFechas'
})
export class FormatFechasPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '-';

    const [fecha] = value.split(' ');
    const [day, month, year] = fecha.split('-');

    return `${day}/${month}/${year}`;
  }


}
