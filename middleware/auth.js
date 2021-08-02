export default function ({ route, redirect }) {
  console.log('middleware: auth')
  if (route.name === 'login') {
    if (!isAuth()) {
      return
    } else {
      return redirect('/')
    }
  }

  if (!isAuth()) {
    return redirect('/login')
  }
}
function isAuth() {
  console.log(localStorage.getItem('fdpg_auth'))
  // Check if user session exists somehow
  return localStorage.getItem('fdpg_auth')
}
