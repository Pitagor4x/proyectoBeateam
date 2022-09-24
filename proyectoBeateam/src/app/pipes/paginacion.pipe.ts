import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  transform(array: any[], page_size: number, page_number: number): any[] {
    page_size = page_size || 5
    page_number = page_number || 1
    --page_number
    return array?.slice(page_number * page_size, (page_number + 1) * page_size)
  }

}
