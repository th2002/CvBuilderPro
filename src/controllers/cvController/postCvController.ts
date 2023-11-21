import { Experience } from "../../entity/user"
document.getElementById('btnCreateCV').addEventListener('click', () => {
  // Info
  const fullname = document.querySelector('.fullname')! as HTMLInputElement
  const workPosition = document.querySelector('.workPosition')! as HTMLInputElement
  const description: HTMLTextAreaElement | null = document.querySelector('.description') as HTMLTextAreaElement

  // Contact
  const email: HTMLInputElement | null = document.querySelector('.email') as HTMLInputElement;
  const linkedin: HTMLInputElement | null = document.querySelector('.linkedin') as HTMLInputElement;
  const phone: HTMLInputElement | null = document.querySelector('.phone') as HTMLInputElement;

  // Skills & Tools
  const skillInputs: NodeListOf<HTMLInputElement> | null = document.querySelectorAll('.skillInput');
  const skillValues: string[] | null = Array.from(skillInputs).map((input) => input.value);

  const toolInputs: NodeListOf<HTMLInputElement> | null = document.querySelectorAll('.toolInput');
  const toolValues: string[] | null = Array.from(toolInputs).map((input) => input.value);

  // Experience
  const jobPositions: 
    NodeListOf<HTMLInputElement> | null 
    = document.querySelectorAll('.jobPosition')
  const jobPositionValues: string[] | null = Array.from(jobPositions).map((job) => job.value);

  const companies: 
    NodeListOf<HTMLInputElement> | null 
    = document.querySelectorAll('.company')
  const companyValues: string[] | null = Array.from(companies).map((company) => company.value);

  const startDates: 
    NodeListOf<HTMLInputElement> | null 
    = document.querySelectorAll('.startDate')
  const startDateValues: string[] | null = Array.from(startDates).map((startDate) => startDate.value);

  const endDates: 
    NodeListOf<HTMLInputElement> | null
    = document.querySelectorAll('.endDate')
  const endDateValues: string[] | null = Array.from(endDates).map((endDate) => endDate.value);

  const expDescriptions: 
    NodeListOf<HTMLInputElement> | null 
    = document.querySelectorAll('.expDescription')
  const expDescriptionValues: string[] | null = Array.from(expDescriptions).map((expDescription) => expDescription.value);

  // tính xem có bao nhiều exp rồi duyệt vòng for lưu vào mảng
  const numberOfSections = expDescriptions.length
  const listExp: Experience[] = []
  for(let i = 0; i < numberOfSections; i++) {
    listExp.push(
      {
        title: jobPositionValues[i],
        company: companyValues[i],
        startDate: startDateValues[i],
        endDate: endDateValues[i],
        description: expDescriptionValues[i]
      }
    )
  }

  console.log(listExp);
})