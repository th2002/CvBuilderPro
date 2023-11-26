import { getCvDetail } from "./functions";

// Contact UI
const linkedinIconUI = document.getElementById("linkedinIconUI")! as HTMLDivElement;
const phoneIconUI = document.getElementById("phoneIconUI")! as HTMLDivElement;

const displayEmail = document.getElementById("displayEmail")! as HTMLElement;
const displayLinkedin = document.getElementById(
  "displayLinkedin"
)! as HTMLElement;
const displayPhone = document.getElementById("displayPhone")! as HTMLElement;

// Skills UI
const displaySkills = document.getElementById("displaySkills")! as HTMLElement;
const skillsIcon = document.getElementById("skillsIcon")! as HTMLElement;

// Tool UI
const displayTools = document.getElementById("displayTools")! as HTMLElement;
const toolsIcon = document.getElementById("toolsIcon")! as HTMLElement;

// dùng biến đếm để lưu vào id của div Experience
let divExp = 0;
( async () => {
    const cv = await getCvDetail();
    const sections = cv.sections;

    // set giá trị biến đếm = với độ dài mảng chứa tt về Experience
    divExp = sections.experience.length
  }
)();

let divEdu = 0;
( async () => {
    const cv = await getCvDetail();
    const sections = cv.sections;

    divEdu = sections.education.length
  }
)();

let divSkill = 0;
( async () => {
    const cv = await getCvDetail();
    const sections = cv.sections;

    divSkill = sections.skills.length
  }
)();


let divTool = 0;
( async () => {
    const cv = await getCvDetail();
    const sections = cv.sections;

    divTool = sections.tools.length
  }
)();

(async () => {
  const cv = await getCvDetail();
  const sections = cv.sections;

  const skills = sections
                .skills
                .map((skill, index) =>  
                `
                  <div id="skillInput${index}" class="flex flex-row gap-3 items-center">
                    <input
                    type="text"
                    spellcheck="false"
                    value="${skill}"
                    class="skillInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
                    <i id="binSkill${index}" onclick="eventBinUpdateForm.removeSkillInput('skillInput${index}')" class="fa-solid fa-trash-can cursor-pointer"></i>
                  </div>
                `
                )
                .join('');

  const tools = sections
                .tools
                .map((tool, index) => 
                `
                <div id="toolInput${index}" class="flex flex-row gap-3 items-center">
                  <input
                  type="text"
                  spellcheck="false"
                  value="${tool}"
                  class="toolInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
                  <i id="binTool${index}" onclick="eventBinUpdateForm.removeToolInput('toolInput${index}')" class="fa-solid fa-trash-can cursor-pointer"></i>
                </div>
                `
                )
                .join('');

  const experience = sections
    .experience
    .map((exp, index) => {
      return `
        <div id="expChildrenDisplay${index}" class="divExp flex flex-col gap-3">
          <i id="binExpIcon${index}" onclick="eventBinUpdateForm.removeExpChildrenDisplay('expChildrenDisplay${index}')" class="fa-solid fa-trash-can cursor-pointer"></i>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[110px]">Job position</p>
            <input
              type="text"
              spellcheck="false"
              value="${exp.title}"
              class="jobPosition w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[110px]">Company</p>
            <input
              type="text"
              spellcheck="false"
              value="${exp.company}"
              class="company w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[110px]">Start Date</p>
            <input
              type="date"
              spellcheck="false"
              value="${exp.startDate}"
              class="startDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[110px]">End Date</p>
            <input
              type="date"
              spellcheck="false"
              value="${exp.endDate}"
              class="endDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
          <div class="flex flex-row gap-4 items-start mt-4">
            <p class="w-[110px]">Description</p>
            <textarea
              spellcheck="false"
              name="expDescription"
              cols="60"
              rows="5"
              value="${exp.description}"
              class="expDescription border border-gray-300 py-3 px-3">${exp.description}</textarea>
          </div>
          <div class="h-0.5 w-full bg-black my-5"></div>
        </div>
      `;
    })
    .join('');

  const education = sections
    .education
    .map((edu, index) => {
      return `
        <div id="eduChildrenDisplay${index}" class="flex flex-col gap-4 mt-5">
        <i id="binEdu${index}" onclick="eventBinUpdateForm.removeEduChildrenDisplay('eduChildrenDisplay${index}')" class="fa-solid fa-trash-can cursor-pointer"></i>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[140px]">Major</p>
            <input
              type="text"
              spellcheck="false"
              value="${edu.major}"
              class="major w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[140px]">Degree</p>
            <input
              type="text"
              spellcheck="false"
              value="${edu.degree}"
              class="degree w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[140px]">School</p>
            <input
              type="text"
              spellcheck="false"
              value="${edu.school}"
              class="school w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
          <div class="flex flex-row gap-4 items-center">
            <p class="w-[140px]">Graduation Year</p>
            <input
              type="text"
              spellcheck="false"
              value="${edu.graduationYear}"
              class="graduationYear w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
          </div>
        </div>
      `
    })
    .join('');

  const displayCv = document.getElementById('displayCv')! as HTMLDivElement;

  displayCv.innerHTML = `
    <div class="flex flex-wrap w-[90%] shadow-2xl shadow-slate-600">
        <div class="flex flex-col gap-3 w-[30%] px-6 py-7">
          <div class="flex flex-row gap-3 items-center">
            <h1 class="text-xl font-semibold text-primary w-[125px]">
              Fullname  
            </h1>
            <input
              type="text"
              spellcheck="false"
              value="${sections.personalInfo.fullName}"
              class="fullname w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
          </div>
          <div class="flex flex-row items-center gap-3 mb-3">
            <h2 class="text-xl font-semibold text-primary w-[125px]">
              Occupation
            </h2>
            <input
              type="text"
              spellcheck="false"
              value="${sections.nominee}"
              class="workPosition w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
          </div>
          <h2 class="mb-2 text-xl font-semibold text-primary">
            Description
          </h2>
          <div class="hidden" id="descriptonIconUI">
            <i id="descriptonIcon" class="cursor-pointer fa-solid fa-plus"></i>
          </div>
          <div id="displayDescripton" class="flex flex-row gap-3">
            <textarea
            spellcheck="false"
            name="description"
            cols="45"
            rows="5"
            value="${cv.description}"
            class="description border border-gray-300 py-3 px-3">${cv.description}</textarea>
            <i id="binDescription" onclick="eventBinUpdateForm.removeDescription()" class="fa-solid fa-trash-can cursor-pointer"></i>
          </div>
          <h3 class="text-lg font-semibold text-primary">Contact</h3>
          <ul class="flex flex-col gap-4 mb-8">
            <li class="flex flex-row gap-3 items-center">
              <i class="mr-3 fa-solid fa-envelope"></i>
              <div id="emailIconUI" class="hidden">
                <i
                  id="emailIcon"
                  class="mr-4 cursor-pointer fa-solid fa-plus"></i>
              </div>
              <div id="displayEmail">
                <input
                type="email"
                spellcheck="false"
                value="${sections.personalInfo.email}"
                class="email ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
                <i id="binEmail" onclick="eventBinUpdateForm.removeEmail()" class="fa-solid fa-trash-can cursor-pointer"></i>
              </div>
            </li>
            <li class="flex flex-row gap-3 items-center">
              <i class="mr-3 fa-brands fa-linkedin"></i>
              <div id="linkedinIconUI" class="hidden">
                <i
                  id="linkedinIcon"
                  class="cursor-pointer fa-solid fa-plus"></i>
              </div>
              <div id="displayLinkedin">
                <input
                type="url"
                spellcheck="false"
                value="${sections.personalInfo.linkedin}"
                class="linkedin ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
                <i id="binLinkedin" onclick="eventBinUpdateForm.removeLinkedin()" class="fa-solid fa-trash-can cursor-pointer"></i>
              </div>
            </li>
            <li class="flex flex-row gap-3 items-center">
              <i class="mr-3 fa-solid fa-phone"></i>
              <div id="phoneIconUI" class="hidden">
                <i id="phoneIcon" class="cursor-pointer fa-solid fa-plus"></i>
              </div>
              <div id="displayPhone">
                <input
                type="number"
                spellcheck="false"
                value="${sections.personalInfo.phone}"
                class="phone ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
                <i id="binPhone" onclick="eventBinUpdateForm.removePhone()" class="fa-solid fa-trash-can cursor-pointer"></i>
              </div>
            </li>
          </ul>
          <h3 class="text-lg font-semibold text-primary">Skills</h3>
          <ul id="displaySkills" class="flex flex-col gap-4 mb-8">
            <i onclick="eventBinUpdateForm.addSkill()" id="skillsIcon" class="cursor-pointer fa-solid fa-plus"></i>
            ${skills}
          </ul>
          <h3 class="text-lg font-semibold text-primary">Tools</h3>
          <ul id="displayTools" class="flex flex-col gap-4 mb-8">
            <i onclick="eventBinUpdateForm.addTool()" id="toolsIcon" class="cursor-pointer fa-solid fa-plus"></i>
            ${tools}
          </ul>
        </div>
        <div class="w-[70%] py-7 pr-7">
          <div
            id="displayExperience"
            class="flex flex-col gap-3 bg-[#F9F9F9] rounded-lg px-6 py-7">
            <div class="flex flex-row items-center gap-4">
              <h1 class="text-xl text-[#222] font-bold">Experience</h1>
              <i
                id="experienceIcon"
                onclick="eventBinUpdateForm.addExp()"
                class="cursor-pointer fa-solid fa-plus"></i>
            </div>
            <div class="h-0.5 w-full bg-black mb-5"></div>
            ${experience}
          </div>
        </div>
        <div class="w-full px-6 pb-7">
          <div class="flex flex-col px-10 py-10 w-full rounded-xl bg-[#F9F9F9]">
            <div class="flex flex-col w-[30%] gap-4">
              <div class="flex flex-row items-center gap-4">
                <h3 class="text-lg font-semibold text-primary">
                  Education & Learning
                </h3>
                <i
                  onclick="eventBinUpdateForm.addEdu()"
                  id="educationIcon"
                  class="cursor-pointer fa-solid fa-plus"></i>
              </div>
            </div>
            <div id="displayEducation" class="flex flex-wrap gap-20">
              ${education}
            </div>
          </div>
        </div>
      </div>
  `
})()

declare global {
  interface Window {
    eventBinUpdateForm: {
      removeDescription: () => void;
      removeEmail: () => void;
      removeLinkedin: () => void;
      removePhone: () => void;
      removeSkillInput: (idSkillInput: string) => void;
      removeToolInput: (idToolInput: string) => void;
      removeSkillSpan: (idSkillChildrenDiv: string) => void;
      removeToolSpan: (idToolChildrenDiv: string) => void;
      removeExpChildrenDisplay: (idExpChildrenDisplay: string) => void;
      removeEduChildrenDisplay: (idEduChildrenDisplay: string) => void;
      addSkill: () => void;
      addTool: () => void;
      addExp: () => void;
      addEdu: () => void;
    };
  }
}

window.eventBinUpdateForm = {
  removeDescription: () => {
    document.querySelector('.description').remove();
    document.getElementById('binDescription').remove();
    document.getElementById("descriptonIconUI").classList.remove('hidden')

    document.getElementById("descriptonIcon").addEventListener("click", () => {
    document.getElementById("displayDescripton").innerHTML = `
      <textarea
          spellcheck="false"
          name="description"
          cols="45"
          rows="5"
          class="description border border-gray-300 py-3 px-3"></textarea>
      <i id="binDescription" onclick="eventBin.removeDescription()" class="fa-solid fa-trash-can cursor-pointer"></i>
    `
    document.getElementById("descriptonIconUI").classList.add('hidden');
    })
  },
  removeEmail: () => {
    document.querySelector('.email').remove();
    document.getElementById('binEmail').remove();
    document.getElementById("emailIconUI").classList.remove('hidden');

    document.getElementById('emailIcon').addEventListener("click", () => {
      document.getElementById('displayEmail').innerHTML = `
        <input
        type="email"
        spellcheck="false"
        class="email ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
        <i id="binEmail" onclick="eventBin.removeEmail()" class="fa-solid fa-trash-can cursor-pointer"></i>
      `;
      document.getElementById('emailIconUI').classList.add('hidden');
    });
  },
  removeLinkedin: () => {
    document.querySelector('.linkedin').remove();
    document.getElementById('binLinkedin').remove();
    document.getElementById('linkedinIconUI').classList.remove('hidden');

    document.getElementById('linkedinIcon').addEventListener("click", () => {
      document.getElementById('displayLinkedin').innerHTML = `
        <input
        type="url"
        spellcheck="false"
        class="linkedin ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
        <i id="binLinkedin" onclick="eventBin.removeLinkedin()" class="fa-solid fa-trash-can cursor-pointer"></i>
      `;
      document.getElementById('linkedinIconUI').classList.add('hidden');
    });
  },
  removePhone: () => {
    document.querySelector('.phone').remove();
    document.getElementById('binPhone').remove();
    document.getElementById('phoneIconUI').classList.remove('hidden')

    document.getElementById('phoneIcon').addEventListener("click", () => {
      document.getElementById('displayPhone').innerHTML = `
        <input
        type="number"
        spellcheck="false"
        class="phone ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
        <i id="binPhone" onclick="eventBin.removePhone()" class="fa-solid fa-trash-can cursor-pointer"></i>
      `;
      document.getElementById('phoneIconUI').classList.add('hidden');
    });
  },
  removeSkillInput: (idSkillInput: string) => {
    document.getElementById(idSkillInput).remove();
  },
  removeToolInput: (idToolInput: string) => {
    document.getElementById(idToolInput).remove();
  },
  removeSkillSpan: (idDiv: string) => {
    document.getElementById(idDiv).remove();
  },
  removeToolSpan: (idDiv: string) => {
    document.getElementById(idDiv).remove();
  },
  removeExpChildrenDisplay: (id: string) => {
    document.getElementById(id).remove();
  }, 
  removeEduChildrenDisplay: (id: string) => {
    document.getElementById(id).remove();
  },
  addSkill: () => {
    divSkill++
    let htmlContent = `
      <div id="skillInput${divSkill}" class="flex flex-row gap-3 items-center">
        <input
          type="text"
          spellcheck="false"
          class="skillInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
          <i id="binSkill${divSkill}" onclick="eventBin.removeSkillInput('skillInput${divSkill}')" class="fa-solid fa-trash-can cursor-pointer"></i>
      </div>
    `

    document.getElementById('displaySkills').insertAdjacentHTML('beforeend' ,htmlContent);
  },
  addTool: () => {
    divTool++

    let htmlContent = `
    <div id="toolInput${divTool}" class="flex flex-row gap-3 items-center">
      <input
      type="text"
      spellcheck="false"
      class="toolInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
      <i id="binTool${divTool}" onclick="eventBin.removeToolInput('toolInput${divTool}')" class="fa-solid fa-trash-can cursor-pointer"></i>
    </div>
  `

  document.getElementById('displayTools').insertAdjacentHTML('beforeend' ,htmlContent);
  },
  addExp: () => {
    divExp++

    let htmlContent = `
      <div id="expChildrenDisplay${divExp + 1}" class="divExp flex flex-col gap-3">
        <i id="binExpIcon${divExp + 1}" onclick="eventBinUpdateForm.removeExpChildrenDisplay('expChildrenDisplay${divExp + 1}')" class="fa-solid fa-trash-can cursor-pointer"></i>
        <div class="flex flex-row gap-4 items-center">
          <p class="w-[110px]">Job position</p>
          <input
            type="text"
            spellcheck="false"
            class="jobPosition w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
        </div>
        <div class="flex flex-row gap-4 items-center">
          <p class="w-[110px]">Company</p>
          <input
            type="text"
            spellcheck="false"
            class="company w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
        </div>
        <div class="flex flex-row gap-4 items-center">
          <p class="w-[110px]">Start Date</p>
          <input
            type="date"
            spellcheck="false"
            class="startDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
        </div>
        <div class="flex flex-row gap-4 items-center">
          <p class="w-[110px]">End Date</p>
          <input
            type="date"
            spellcheck="false"
            class="endDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
        </div>
        <div class="flex flex-row gap-4 items-start mt-4">
          <p class="w-[110px]">Description</p>
          <textarea
            spellcheck="false"
            name="expDescription"
            cols="60"
            rows="5"
            class="expDescription border border-gray-300 py-3 px-3"></textarea>
        </div>
        <div class="h-0.5 w-full bg-black my-5"></div>
      </div>
    `

    document.getElementById('displayExperience').insertAdjacentHTML('beforeend', htmlContent)
  },
  addEdu: () => {
    divEdu++
    let htmlContent = `
    <div id="eduChildrenDisplay${divEdu}" class="flex flex-col gap-4 mt-5">
    <i id="binEdu${divEdu}" onclick="eventBin.removeEduChildrenDisplay('eduChildrenDisplay${divEdu}')" class="fa-solid fa-trash-can cursor-pointer"></i>
      <div class="flex flex-row gap-4 items-center">
        <p class="w-[130px]">Major</p>
        <input
          type="text"
          spellcheck="false"
          class="major w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
      </div>
      <div class="flex flex-row gap-4 items-center">
        <p class="w-[130px]">Degree</p>
        <input
          type="text"
          spellcheck="false"
          class="degree w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
      </div>
      <div class="flex flex-row gap-4 items-center">
        <p class="w-[130px]">School</p>
        <input
          type="text"
          spellcheck="false"
          class="school w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
      </div>
      <div class="flex flex-row gap-4 items-center">
        <p>Graduation Year</p>
        <input
          type="text"
          spellcheck="false"
          class="graduationYear w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]" />
      </div>
    </div>
  `

  document.getElementById('displayEducation').insertAdjacentHTML('beforeend', htmlContent)
  }
}