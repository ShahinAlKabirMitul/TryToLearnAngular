import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

    console.log('pipe call')
    let prepositions=[
      'of',
      'the'
    ];

    if(!value) return null;
    let words=value.split(' ');
 
    for (var i = 0; i < words.length; i++) {
      var element = words[i];
      if( i>0 && prepositions.includes(element))
        words[i]=element.toLocaleLowerCase();
      else {
        words[i]= element.substr(0,1).toLocaleUpperCase()+element.substr(1).toLocaleLowerCase();
        }
    }
    return words.join(' ');
  }

}
