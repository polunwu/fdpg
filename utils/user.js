const KEY_NAME = 'ozj32uqurm'

export function getUser() {
  return JSON.parse(localStorage.getItem(KEY_NAME))
}
export function setUser(user) {
  localStorage.setItem(KEY_NAME, user)
}
export function clearUser() {
  localStorage.removeItem(KEY_NAME)
}

export function charAcquired() {
  return localStorage.getItem('u3fm32k6rul3nk4')
}
