import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: string): string {
    let uName: string[] = value.split('@');
    return uName[0];
  }

}
