import { CanActivateChildFn, CanActivateFn } from '@angular/router';

export const dashChildGuard: CanActivateChildFn = (route, state) => {
  const isLoggedIn = true;

  return isLoggedIn;
};
