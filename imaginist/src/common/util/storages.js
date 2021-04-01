export function getLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
