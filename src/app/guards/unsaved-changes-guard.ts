import { CanDeactivateFn } from '@angular/router';
import { Profile } from '../pages/profile/profile';

export const unsavedChangesGuard: CanDeactivateFn<Profile> = (component) => {
  if (component.hasSavedChanges) {
    return confirm('Are you sure you want to leave?');
  }
  return true;
};
