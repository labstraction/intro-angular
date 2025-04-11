import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poke'
})
export class PokePipe implements PipeTransform {

  transform(name: string, url: string): string {
    return 'Pokemon: ' + name + ' ' +  this.removeHttpFromUrl(url);
  }

  removeHttpFromUrl(url: string): string{
    return url.replace('http', '')
  }

}
