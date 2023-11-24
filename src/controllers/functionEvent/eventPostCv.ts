import { skills, tools } from "../../data/dataCV";

// Description UI
const descriptonIcon = document.getElementById("descriptonIcon")! as HTMLElement
const descriptonIconUI = document.getElementById("descriptonIconUI")! as HTMLDivElement
const displayDescripton = document.getElementById("displayDescripton")! as HTMLDivElement

descriptonIcon.addEventListener("click", () => {
  displayDescripton.innerHTML = `
    <textarea
        spellcheck="false"
        name="description"
        cols="45"
        rows="5"
        class="description border border-gray-300 py-3 px-3"></textarea>
    <i id="binDescription" onclick="eventBin.removeDescription()" class="fa-solid fa-trash-can cursor-pointer"></i>
  `
  descriptonIconUI.classList.add('hidden');
})
// Contact UI
const emailIcon = document.getElementById("emailIcon")! as HTMLElement;
const linkedinIcon = document.getElementById("linkedinIcon")! as HTMLElement;
const phoneIcon = document.getElementById("phoneIcon")! as HTMLElement;

const emailIconUI = document.getElementById("emailIconUI")! as HTMLDivElement;
const linkedinIconUI = document.getElementById("linkedinIconUI")! as HTMLDivElement;
const phoneIconUI = document.getElementById("phoneIconUI")! as HTMLDivElement;

const displayEmail = document.getElementById("displayEmail")! as HTMLElement;
const displayLinkedin = document.getElementById(
  "displayLinkedin"
)! as HTMLElement;
const displayPhone = document.getElementById("displayPhone")! as HTMLElement;

emailIcon.addEventListener("click", () => {
  displayEmail.innerHTML = `
    <input
    type="email"
    spellcheck="false"
    class="email ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
    <i id="binEmail" onclick="eventBin.removeEmail()" class="fa-solid fa-trash-can cursor-pointer"></i>
  `;
  emailIconUI.classList.add('hidden');
});

linkedinIcon.addEventListener("click", () => {
  displayLinkedin.innerHTML = `
    <input
    type="url"
    spellcheck="false"
    class="linkedin ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none" />
    <i id="binLinkedin" onclick="eventBin.removeLinkedin()" class="fa-solid fa-trash-can cursor-pointer"></i>
  `;
  linkedinIconUI.classList.add('hidden');
});

phoneIcon.addEventListener("click", () => {
  displayPhone.innerHTML = `
    <input
    type="number"
    spellcheck="false"
    class="phone ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
    <i id="binPhone" onclick="eventBin.removePhone()" class="fa-solid fa-trash-can cursor-pointer"></i>
  `;
  phoneIconUI.classList.add('hidden');
});

// Skills UI
const displaySkills = document.getElementById("displaySkills")! as HTMLElement;
const skillsIcon = document.getElementById("skillsIcon")! as HTMLElement;

let iSkillInput = 0;
skillsIcon.addEventListener("click", () => {
  iSkillInput += 1;
  let htmlContent = `
    <div id="skillInput${iSkillInput}" class="flex flex-row gap-3 items-center">
      <input
      type="text"
      spellcheck="false"
      class="skillInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
      <i id="binSkill${iSkillInput}" onclick="eventBin.removeSkillInput('skillInput${iSkillInput}')" class="fa-solid fa-trash-can cursor-pointer"></i>
    </div>
  `

  displaySkills.insertAdjacentHTML('beforeend' ,htmlContent);
});

// Tool UI
const displayTools = document.getElementById("displayTools")! as HTMLElement;
const toolsIcon = document.getElementById("toolsIcon")! as HTMLElement;
let iToolInput = 0;
toolsIcon.addEventListener("click", () => {
  iToolInput +=1;
  let htmlContent = `
    <div id="toolInput${iToolInput}" class="flex flex-row gap-3 items-center">
      <input
      type="text"
      spellcheck="false"
      class="toolInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none" />
      <i id="binTool${iToolInput}" onclick="eventBin.removeToolInput('toolInput${iToolInput}')" class="fa-solid fa-trash-can cursor-pointer"></i>
    </div>
  `

  displayTools.insertAdjacentHTML('beforeend' ,htmlContent);
});

interface SuggestedData {
  suggestedSkills: string[];
  suggestedTools: string[];
}

// find data from input value
function suggestSkillsAndTools(input: string): SuggestedData {
  input = input.toLowerCase();
  const suggestedSkills: string[] = skills.filter((skill) =>
    skill.toLowerCase().includes(input)
  );
  const suggestedTools: string[] = tools.filter((tool) =>
    tool.toLowerCase().includes(input)
  );

  // trả về mảng data dữ liệu khớp với value của input
  return {
    suggestedSkills: suggestedSkills,
    suggestedTools: suggestedTools,
  };
}

function renderSelectedSkill(skill: string, i: number) {
  // Tạo một thẻ span để hiển thị kỹ năng đã chọn
    const htmlSpanSkill = `
      <div id="spanSkill${i}" class="flex flex-row gap-4 items-center">
        <span class="skillSpan w-[100px]">${skill}</span>
        <i onclick="eventBin.removeSkillSpan('spanSkill${i}')" class="fa-solid fa-trash-can cursor-pointer"></i>
      </div>
    `

    // Thêm một thẻ span vào container skills
    displaySkills.insertAdjacentHTML('beforebegin', htmlSpanSkill);
}

function renderSelectedTool(tool: string, i: number) {
   const htmlSpanTool = `
      <div id="toolSpan${i}" class="flex flex-row gap-4 items-center">
        <span class="toolSpan w-[100px]">${tool}</span>
        <i onclick="eventBin.removeToolSpan('toolSpan${i}')" class="fa-solid fa-trash-can cursor-pointer"></i>
      </div>
    `

    // Thêm một thẻ span vào container skills
    displayTools.insertAdjacentHTML('beforebegin', htmlSpanTool);
}

let prevInputValue = "";
let iSpanSkill: number = 0;
let iSpanTool: number = 0;

function handleInputChange() {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  const suggestionList = document.getElementById("suggestionList");

  if (inputField && suggestionList) {
    let inputValue = inputField.value;

    // Kiểm tra xem giá trị đã thay đổi hay chưa => khác rỗng thì thực hiện render
    if (inputValue !== prevInputValue) {
      // lưu mảng data tìm thấy vào suggestedSkills || suggestedTools
      const { suggestedSkills, suggestedTools } =
        suggestSkillsAndTools(inputValue);

      // làm mới lại dropdown ul khi input thay đổi
      suggestionList.innerHTML = "";

      // thêm sự kiện click vào từng thẻ li để chọn skill or tool
      if (suggestedSkills !== null) {
        suggestedSkills.forEach((suggestion) => {
          const listItem = document.createElement("li");
          listItem.classList.add("cursor-pointer", "border", "boder-b-2", "py-3", "px-4");
          listItem.textContent = suggestion;
          suggestionList.classList.remove("hidden")

          listItem.addEventListener("click", () => {
            iSpanSkill++
            // render dữ liệu đã chọn vào container
            renderSelectedSkill(suggestion, iSpanSkill);
            // clear dropdown ul khi đã chọn 1 option li
            suggestionList.innerHTML = "";
            inputField.value = ""
            suggestionList.classList.add("hidden")
          });

          // thêm option li vào ul khi input thay đổi
          suggestionList.appendChild(listItem);
        });
      }
      if (suggestedTools !== null) {
        suggestedTools.forEach((suggestion) => {
          const listItem = document.createElement("li");
          listItem.classList.add("cursor-pointer", "border" ,"boder-b-2", "py-3", "px-4");
          listItem.textContent = suggestion;
          suggestionList.classList.remove("hidden")

          listItem.addEventListener("click", () => {
            iSpanTool++
            // render dữ liệu đã chọn vào container
            renderSelectedTool(suggestion, iSpanTool);
            // clear dropdown ul khi đã chọn 1 option li
            suggestionList.innerHTML = "";
            inputField.value = ""
            suggestionList.classList.add("hidden")
          });

          // thêm option li vào ul khi input thay đổi
          suggestionList.appendChild(listItem);
        });
      }
    } else {
      // clear list option li khi input trống
      suggestionList.innerHTML = "";
      suggestionList.classList.add("hidden")
    }
  }
}

document
  .getElementById("inputField")
  .addEventListener("input", handleInputChange);


// Experience UI
const experienceIcon = document.getElementById("experienceIcon")! as HTMLElement
const displayExperience = document.getElementById("displayExperience")! as HTMLDivElement
let iExp = 0;
experienceIcon.addEventListener('click', () => {
  iExp += 1;
  let htmlContent = `
    <div id="expChildrenDisplay${iExp}" class="flex flex-col gap-3">
      <i id="binExpIcon${iExp}" onclick="eventBin.removeExpChildrenDisplay('expChildrenDisplay${iExp}')" class="fa-solid fa-trash-can cursor-pointer"></i>
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

  displayExperience.insertAdjacentHTML('beforeend', htmlContent)
})

const educationIcon = document.getElementById("educationIcon")! as HTMLElement
const displayEducation = document.getElementById('displayEducation')! as HTMLDivElement
let iEducation = 0;

educationIcon.addEventListener('click', () => {
  iEducation += 1;
  let htmlContent = `
    <div id="eduChildrenDisplay${iEducation}" class="flex flex-col gap-4 mt-5">
    <i id="binEdu${iEducation}" onclick="eventBin.removeEduChildrenDisplay('eduChildrenDisplay${iEducation}')" class="fa-solid fa-trash-can cursor-pointer"></i>
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

  displayEducation.insertAdjacentHTML('beforeend', htmlContent)
})

declare global {
  interface Window {
    eventBin: {
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
    };
  }
}

window.eventBin = {
  removeDescription: () => {
    document.querySelector('.description').remove();
    document.getElementById('binDescription').remove();
    descriptonIconUI.classList.remove('hidden')
  },
  removeEmail: () => {
    document.querySelector('.email').remove();
    document.getElementById('binEmail').remove();
    emailIconUI.classList.remove('hidden');
  },
  removeLinkedin: () => {
    document.querySelector('.linkedin').remove();
    document.getElementById('binLinkedin').remove();
    linkedinIconUI.classList.remove('hidden');
  },
  removePhone: () => {
    document.querySelector('.phone').remove();
    document.getElementById('binPhone').remove();
    phoneIconUI.classList.remove('hidden')
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
  }
};
