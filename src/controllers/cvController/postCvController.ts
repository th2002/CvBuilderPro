import { skills, tools } from "../../data/dataCV";

// Job UI
const jobIcon = document.getElementById("jobIcon")! as HTMLElement;
const displayJob = document.getElementById("displayJob")! as HTMLElement;

jobIcon.addEventListener("click", () => {
  displayJob.innerHTML = `
    <input
    id="inputJob"
    class="w-[300px] h-[30px] border px-2 py-3"
    type="text"
    spellcheck="false" />
  `;
  jobIcon.remove();
});

// Contact UI
const emailIcon = document.getElementById("emailIcon")! as HTMLElement;
const linkedinIcon = document.getElementById("linkedinIcon")! as HTMLElement;
const phoneIcon = document.getElementById("phoneIcon")! as HTMLElement;

const displayEmail = document.getElementById("displayEmail")! as HTMLElement;
const displayLinkedin = document.getElementById(
  "displayLinkedin"
)! as HTMLElement;
const displayPhone = document.getElementById("displayPhone")! as HTMLElement;

emailIcon.addEventListener("click", () => {
  displayEmail.innerHTML = `
    <input
    type="text"
    class="ml-2 w-[300px] h-[30px] border px-2 py-3" />
  `;
  emailIcon.remove();
});

linkedinIcon.addEventListener("click", () => {
  displayLinkedin.innerHTML = `
    <input
    type="text"
    class="ml-2 w-[300px] h-[30px] border px-2 py-3" />
  `;
  linkedinIcon.remove();
});

phoneIcon.addEventListener("click", () => {
  displayPhone.innerHTML = `
    <input
    type="text"
    class="ml-2 w-[300px] h-[30px] border px-2 py-3" />
  `;
  phoneIcon.remove();
});

// Skills UI
const displaySkills = document.getElementById("displaySkills")! as HTMLElement;
const skillsIcon = document.getElementById("skillsIcon")! as HTMLElement;

skillsIcon.addEventListener("click", () => {
  const newListItem = document.createElement("li");

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.classList.add("w-[300px]", "h-[30px]", "border", "px-2", "py-3");

  newListItem.appendChild(newInput);

  displaySkills.appendChild(newListItem);
});

// Tool UI
const displayTools = document.getElementById("displayTools")! as HTMLElement;
const toolsIcon = document.getElementById("toolsIcon")! as HTMLElement;

toolsIcon.addEventListener("click", () => {
  const newListItem = document.createElement("li");

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.classList.add("w-[300px]", "h-[30px]", "border", "px-2", "py-3");

  newListItem.appendChild(newInput);

  displayTools.appendChild(newListItem);
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

function renderSelectedSkill(skill: string) {
  // Tạo một thẻ span để hiển thị kỹ năng đã chọn
    const selectedSkillTag = document.createElement("span");
    selectedSkillTag.textContent = skill;

    // Thêm một thẻ span vào container skills
    displaySkills.appendChild(selectedSkillTag);
}

function renderSelectedTool(tool: string) {
  // Tạo một thẻ span để hiển thị kỹ năng đã chọn
    const selectedToolTag = document.createElement("span");
    selectedToolTag.textContent = tool;

    // Thêm một thẻ span vào container tools
    displayTools.appendChild(selectedToolTag);
}

let prevInputValue = "";

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

          listItem.addEventListener("click", () => {
            // render dữ liệu đã chọn vào container
            renderSelectedSkill(suggestion);
            // clear dropdown ul khi đã chọn 1 option li
            suggestionList.innerHTML = "";
            inputField.value = ""
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

          listItem.addEventListener("click", () => {
            // render dữ liệu đã chọn vào container
            renderSelectedTool(suggestion);
            // clear dropdown ul khi đã chọn 1 option li
            suggestionList.innerHTML = "";
            inputField.value = ""
          });

          // thêm option li vào ul khi input thay đổi
          suggestionList.appendChild(listItem);
        });
      }
    } else {
      // clear list option li khi input trống
      suggestionList.innerHTML = "";
    }
  }
}

document
  .getElementById("inputField")
  .addEventListener("input", handleInputChange);
