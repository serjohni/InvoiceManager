export const ACCESS_TOKEN = "accessToken";
export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}
export function setToken(token) {
  localStorage.setItem(ACCESS_TOKEN, token);
}
export function clearToken() {
  localStorage.removeItem(ACCESS_TOKEN);
}
export function isAuthenticated() {
  return Boolean(getToken());
}