import './assets/styles/main.css'
import './assets/favicon/favicon-webpack.png'

function login() {
  window.location.href = './pages/home.html'
}

document.getElementById('btnLogin').addEventListener('click', login)