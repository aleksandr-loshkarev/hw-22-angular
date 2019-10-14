import { Component } from '@angular/core';
import { EntityObj } from './models/entity.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework22';

  constructor() {

    function transformEntity<V>(obj: V): V {
      if ( typeof obj === 'string') {
        return obj;
      } else if ( typeof obj === 'number') {
        return obj;
      } else {
        return obj;
      }
    }

    transformEntity<string>('fdsfd');
    transformEntity<number>(32432);
    transformEntity<boolean>(true);

    function transform<V, B, U>(obj: V, obj1: B, obj2: U): B & V & U {
      return {
        ...obj,
        ...obj1,
        ...obj2
      };
    }
    transform<EntityObj<number>, EntityObj<string>, EntityObj<boolean>>({ id: 13, person: 4 }, { id: 235, person: 'Vasia' }, { id: 1, person: true});
  }
}
