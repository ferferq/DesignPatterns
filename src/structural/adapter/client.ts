import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './interface/email-validator-protocol';
import {
  emailValidatorFnAdapter,
  ValidatorAdapter,
} from './validation/validator-adapter';

const email = 'fernando@gmail.com';

function validaEmail(
  email: string,
  validatorAdapter: EmailValidatorProtocol,
): void {
  if (validatorAdapter.isEmail(email)) {
    console.log('é valido');
    return;
  }
  console.log('é invalido');
}

validaEmail(email, new ValidatorAdapter());

function validaEmailFn(
  email: string,
  emailValidatorFnAdapter: EmailValidatorFnProtocol,
): void {
  if (emailValidatorFnAdapter(email)) {
    console.log('é valido');
    return;
  }
  console.log('é invalido');
}

validaEmailFn(email, emailValidatorFnAdapter);
