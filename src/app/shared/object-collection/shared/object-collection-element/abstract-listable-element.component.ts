import { Component, Inject } from '@angular/core';
import { ListableObject } from '../listable-object.model';
import { hasValue } from '../../../empty.util';

@Component({
  selector: 'ds-abstract-object-element',
  template: ``,
})
export class AbstractListableElementComponent <T extends ListableObject> {
  object: T;
  public constructor(@Inject('objectElementProvider') public listableObject: ListableObject) {
    this.object = listableObject as T;
  }

  hasValue(data) {
    return hasValue(data);
  }
}
