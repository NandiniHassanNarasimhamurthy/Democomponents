import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: String[] = ["Adam", 'E123', 'at@abc.net'];
  info2: String[] = ["cadam", 'E124', 'ac@abc.net'];
  info3: String[] = ["jadam", 'E125', 'ja@abc.net'];

  
getinfo1(): String[]{
  return this.info1
}
getinfo2(): String[]{
  return this.info2
}
getinfo3(): String[]{
  return this.info3
}
  constructor() { }
}
