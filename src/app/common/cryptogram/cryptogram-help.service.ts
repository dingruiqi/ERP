import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class CryptogramHelpService {

  constructor() { }

  md5Hash(encryptionObj: any): string {
    return Md5.hashAsciiStr(encryptionObj).toString();
  }
}
