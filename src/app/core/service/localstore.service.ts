import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  constructor() { }

  getUserLocalStorageGet(datakey: string) {
    return JSON.parse(localStorage.getItem(datakey) || "{}");
  }

  setUserLocalStorageGet(datakey: string, data: any) {
    return localStorage.setItem(datakey, JSON.stringify(data));
  }
}
