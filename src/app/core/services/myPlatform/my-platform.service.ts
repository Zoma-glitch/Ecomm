import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyPlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  checkPlatform(): boolean
   {
    return isPlatformBrowser(this.platformId)? true : false
  }
}
