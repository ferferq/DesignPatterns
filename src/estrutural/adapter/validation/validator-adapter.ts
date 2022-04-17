import isEmail from 'validator/lib/isEmail';
import {
  EmailValidatorProtocol,
  EmailValidatorFnProtocol,
} from '../interface/email-validator-protocol';

export class ValidatorAdapter implements EmailValidatorProtocol {
  isEmail(email: string): boolean {
    return isEmail(email);
  }
}

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  email: string,
): boolean => {
  return isEmail(email);
};
