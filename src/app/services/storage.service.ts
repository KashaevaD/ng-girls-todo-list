import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  hasData(key: string): boolean {
    return !!Array.from(JSON.parse(localStorage.getItem(key))).length;
  }

  getData(key: string): any {
    return Array.from(JSON.parse(localStorage.getItem(key)));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
