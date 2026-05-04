import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MyPlatformService } from '../../services/myPlatform/my-platform.service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  let myPlatformService = inject(MyPlatformService)

  if(myPlatformService.checkPlatform()){
    if(localStorage.getItem("freshtoken")){

      let userToken :any = {token : localStorage.getItem("freshtoken")}

      req = req.clone({
        setHeaders:userToken
      })
    }

  }




  return next(req);
};
