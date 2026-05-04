import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MyPlatformService } from '../../services/myPlatform/my-platform.service';

export const authGuard: CanActivateFn = (route, state) => {

let router:Router = inject(Router);
let myPlatformService :MyPlatformService = inject(MyPlatformService)


if(myPlatformService.checkPlatform()){

  if(localStorage.getItem("freshtoken"))
    return true
  else
    return router.createUrlTree(['/login'])
}



  return true;
};
