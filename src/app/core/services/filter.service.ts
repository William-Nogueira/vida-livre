import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSignal = signal('');

  get filterValue() {
    return this.filterSignal();
  }

  setFilterValue(value: string) {
    this.filterSignal.set(value);
  }
}
