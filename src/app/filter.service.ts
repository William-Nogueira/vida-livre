import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject = new BehaviorSubject<string>('');

  get filterValue$() {
    return this.filterSubject.asObservable();
  }

  setFilterValue(value: string) {
    this.filterSubject.next(value);
  }
}
