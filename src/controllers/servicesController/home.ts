import { logout } from "../functionEvent/functions"
const btnNextPageAddCv = document.getElementById('btnNextPageAddCv')! as HTMLButtonElement

btnNextPageAddCv.addEventListener('click', () => {
  window.location.href = './add_form.html'
})

const btnLogout = document.getElementById('btnLogout')! as HTMLElement

btnLogout.addEventListener('click', logout)


