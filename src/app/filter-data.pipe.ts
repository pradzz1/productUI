import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(items: any, searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
   
    return items.filter(it => {
      return it.name.includes(searchText);
    });
   // items.filter(function(el) { return el.name == searchText; 
  
  }

}
