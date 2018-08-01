import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  isHourInputValid,
  isInRange,
  isMinuteInputValid,
  isSecondInputValid
} from './timepicker.utils';


export function hoursValidator({ value }: AbstractControl): ValidationErrors | null {
  if (!isHourInputValid(value.timeOptionValue)) {
    return { hours : true };
  }

  return null;
}

export function minutesValidator({ value }: AbstractControl): ValidationErrors | null {
  if (!isMinuteInputValid(value.timeOptionValue)) {
    return { minutes : true };
  }

  return null;
}

export function secondsValidator({ value }: AbstractControl): ValidationErrors | null {
  if (!isSecondInputValid(value.timeOptionValue)) {
    return { seconds : true };
  }

  return null;
}

export function limitsValidator({ value }: AbstractControl): ValidationErrors | null {
  if (!value.range) {

    return null;
  }

  if (isInRange(value.timeOptionValue, value.range.max, value.range.min)) {

    return null;
  }

  return { inputLimit: true };
}
