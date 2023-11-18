import getCvByUserId from "../../models/cvModel/getCvModel"

const btnNextPageAddCv = document.getElementById('btnNextPageAddCv')! as HTMLButtonElement

btnNextPageAddCv.addEventListener('click', () => {
  window.location.href = './add_form.html'
})
