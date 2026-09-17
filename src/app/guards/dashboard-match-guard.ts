import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const dashboardMatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  const isLoggerIn = false;
  if (isLoggerIn) {
    return true;
  }
  return router.createUrlTree(['/pages/login']);
};
