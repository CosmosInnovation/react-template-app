import jwtDecode from 'jwt-decode';

const key = 'jwToken';
type Callback<T> = (...args: T[]) => void;

function executeSecureStoreCommand(command: Callback<string>, ...args: string[]) {
  try {
    return command(...args);
  } catch (error) {
    console.error('Error executing storage command:', error);
    return null;
  }
}

export function storeToken(token: string) {
  executeSecureStoreCommand(localStorage.setItem, key, token);
}

export function getJWToken() {
  return executeSecureStoreCommand(localStorage.getItem, key);
}

export function getUserId() {
  const token = getJWToken();
  if (!token) {
    return null;
  }

  try {
    const decodedToken: { id?: number } = jwtDecode(token);
    return decodedToken.id || null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

export function removeToken() {
  executeSecureStoreCommand(localStorage.removeItem, key);
}
