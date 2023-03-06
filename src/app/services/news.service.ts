import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  new: any;

  setNew(myNew: any) {
    this.new = myNew;
  }

  getNew() {
    return this.new;
  }

  clearNew() {
    this.new = undefined;
  }
}
