const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

export function signIn() {
  return {
    type: SIGN_IN,
  }
}

export function signOut() {
  return {
    type: SIGN_OUT,
  }
}