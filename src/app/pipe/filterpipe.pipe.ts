import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterpipePipe implements PipeTransform {

  transform(content: any, searchString: string) {
    if (!searchString) {
      return content;
    }
    console.log(content)
    return content.filter((x: any) => x.Title.toLocaleLowerCase() .includes(searchString)
      || x.Descreption.toLocaleLowerCase().includes(searchString)
      
    );
  }

}