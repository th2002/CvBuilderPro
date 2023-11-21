/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/dataCV.ts":
/*!****************************!*\
  !*** ./src/data/dataCV.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skills: () => (/* binding */ skills),
/* harmony export */   tools: () => (/* binding */ tools)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Mảng kỹ năng cho Phát triển Phần mềm
var skillsSoftwareDevelopment = [
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'React',
    'Angular',
    'Vuejs',
    'Nuxtjs',
    'Nestjs',
    'Quản lý Phiên bản: Git',
    'MongoDB',
    'Mysql',
    'Sql server',
    'PostgreSQL',
    'RESTful APIs',
    'Kiểm thử: Jest, Mocha, Selenium',
    'Trình quản lý Dự án và Gói phần mềm: npm, Yarn',
    'Biên dịch và Đóng gói: Webpack, Babel',
    'Kiến thức về An toàn Thông tin',
];
// Mảng công cụ cho Phát triển Phần mềm
var toolsSoftwareDevelopment = [
    'Trello',
    'Jira',
    'Slack',
    'Postman',
    'DevTools',
    'Git',
    'GitHub',
    'GitLab',
    'Figma',
    'MongoDB Compass',
    'MySQL Workbench',
    'Bitbucket',
    'Travis CI',
    'Công cụ Phân tích Mã nguồn: SonarQube',
    'Quản lý Gói phần mềm: npm, yarn',
];
// Mảng kỹ năng cho Quản lý Hệ thống
var skillsSystemAdministration = [
    'Hệ điều hành: Linux (Ubuntu, CentOS), Windows Server',
    'Công nghệ Đám mây: AWS, Azure, Google Cloud',
    'Docker và Containers: Docker, Kubernetes',
    'Công cụ Tự động hóa và Quản lý Cấu hình: Ansible, Puppet, Chef',
    'Quản lý Dự án và Điều phối: Agile, Scrum',
    'Kiểm thử và Giả lập Hệ thống: Selenium, JMeter',
    'Overseeing Công nghệ Thông tin',
    'Kiến thức về Bảo mật Hệ thống',
];
// Mảng công cụ cho Quản lý Hệ thống
var toolsSystemAdministration = [
    'Công cụ Đám mây và Quản lý Hạ tầng: AWS Console, Azure Portal, Google Cloud Console',
    'Công cụ Tự động hóa: Ansible, Puppet, Chef',
    'Containers và Orchestration: Docker, Kubernetes',
    'Công cụ Giám sát và Log: Prometheus, Grafana, ELK Stack',
    'Quản lý Phiên bản và Tự động Hóa: Git, Jenkins, Travis CI',
    'Công cụ Bảo mật: Nessus, Wireshark, Security Onion',
    'Công cụ Quản lý Cấu hình: Terraform',
    'Trình Quản lý Container: Kubernetes Dashboard',
];
var skills = __spreadArray(__spreadArray([], skillsSoftwareDevelopment, true), skillsSystemAdministration, true);
var tools = __spreadArray(__spreadArray([], toolsSoftwareDevelopment, true), toolsSystemAdministration, true);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./src/controllers/functionEvent/eventPostCv.ts ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_dataCV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/dataCV */ "./src/data/dataCV.ts");

// Description UI
var descriptonIcon = document.getElementById("descriptonIcon");
var descriptonIconUI = document.getElementById("descriptonIconUI");
var displayDescripton = document.getElementById("displayDescripton");
descriptonIcon.addEventListener("click", function () {
    displayDescripton.innerHTML = "\n    <textarea\n        spellcheck=\"false\"\n        name=\"description\"\n        cols=\"45\"\n        rows=\"5\"\n        class=\"description border border-gray-300 py-3 px-3\"></textarea>\n    <i id=\"binDescription\" onclick=\"eventBin.removeDescription()\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n  ";
    descriptonIconUI.classList.add('hidden');
});
// Contact UI
var emailIcon = document.getElementById("emailIcon");
var linkedinIcon = document.getElementById("linkedinIcon");
var phoneIcon = document.getElementById("phoneIcon");
var emailIconUI = document.getElementById("emailIconUI");
var linkedinIconUI = document.getElementById("linkedinIconUI");
var phoneIconUI = document.getElementById("phoneIconUI");
var displayEmail = document.getElementById("displayEmail");
var displayLinkedin = document.getElementById("displayLinkedin");
var displayPhone = document.getElementById("displayPhone");
emailIcon.addEventListener("click", function () {
    displayEmail.innerHTML = "\n    <input\n    type=\"email\"\n    spellcheck=\"false\"\n    class=\"email ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n    <i id=\"binEmail\" onclick=\"eventBin.removeEmail()\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n  ";
    emailIconUI.classList.add('hidden');
});
linkedinIcon.addEventListener("click", function () {
    displayLinkedin.innerHTML = "\n    <input\n    type=\"url\"\n    spellcheck=\"false\"\n    class=\"linkedin ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n    <i id=\"binLinkedin\" onclick=\"eventBin.removeLinkedin()\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n  ";
    linkedinIconUI.classList.add('hidden');
});
phoneIcon.addEventListener("click", function () {
    displayPhone.innerHTML = "\n    <input\n    type=\"number\"\n    spellcheck=\"false\"\n    class=\"phone ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none\" />\n    <i id=\"binPhone\" onclick=\"eventBin.removePhone()\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n  ";
    phoneIconUI.classList.add('hidden');
});
// Skills UI
var displaySkills = document.getElementById("displaySkills");
var skillsIcon = document.getElementById("skillsIcon");
var iSkillInput = 0;
skillsIcon.addEventListener("click", function () {
    iSkillInput += 1;
    var htmlContent = "\n    <div id=\"skillInput".concat(iSkillInput, "\" class=\"flex flex-row gap-3 items-center\">\n      <input\n      type=\"text\"\n      spellcheck=\"false\"\n      class=\"skillInput ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none\" />\n      <i id=\"binSkill").concat(iSkillInput, "\" onclick=\"eventBin.removeSkillInput('skillInput").concat(iSkillInput, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n    </div>\n  ");
    displaySkills.insertAdjacentHTML('beforeend', htmlContent);
});
// Tool UI
var displayTools = document.getElementById("displayTools");
var toolsIcon = document.getElementById("toolsIcon");
var iToolInput = 0;
toolsIcon.addEventListener("click", function () {
    iToolInput += 1;
    var htmlContent = "\n    <div id=\"toolInput".concat(iToolInput, "\" class=\"flex flex-row gap-3 items-center\">\n      <input\n      type=\"text\"\n      spellcheck=\"false\"\n      class=\"toolInput ml-2 w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none\" />\n      <i id=\"binTool").concat(iToolInput, "\" onclick=\"eventBin.removeToolInput('toolInput").concat(iToolInput, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n    </div>\n  ");
    displayTools.insertAdjacentHTML('beforeend', htmlContent);
});
// find data from input value
function suggestSkillsAndTools(input) {
    input = input.toLowerCase();
    var suggestedSkills = _data_dataCV__WEBPACK_IMPORTED_MODULE_0__.skills.filter(function (skill) {
        return skill.toLowerCase().includes(input);
    });
    var suggestedTools = _data_dataCV__WEBPACK_IMPORTED_MODULE_0__.tools.filter(function (tool) {
        return tool.toLowerCase().includes(input);
    });
    // trả về mảng data dữ liệu khớp với value của input
    return {
        suggestedSkills: suggestedSkills,
        suggestedTools: suggestedTools,
    };
}
function renderSelectedSkill(skill) {
    // Tạo một thẻ span để hiển thị kỹ năng đã chọn
    var selectedSkillTag = document.createElement("span");
    selectedSkillTag.classList.add("skillSpan");
    selectedSkillTag.textContent = skill;
    // Thêm một thẻ span vào container skills
    displaySkills.insertBefore(selectedSkillTag, displaySkills.firstChild);
}
function renderSelectedTool(tool) {
    // Tạo một thẻ span để hiển thị kỹ năng đã chọn
    var selectedToolTag = document.createElement("span");
    selectedToolTag.classList.add("toolSpan");
    selectedToolTag.textContent = tool;
    // Thêm một thẻ span vào container tools
    displayTools.insertBefore(selectedToolTag, displayTools.firstChild);
}
var prevInputValue = "";
function handleInputChange() {
    var inputField = document.getElementById("inputField");
    var suggestionList = document.getElementById("suggestionList");
    if (inputField && suggestionList) {
        var inputValue = inputField.value;
        // Kiểm tra xem giá trị đã thay đổi hay chưa => khác rỗng thì thực hiện render
        if (inputValue !== prevInputValue) {
            // lưu mảng data tìm thấy vào suggestedSkills || suggestedTools
            var _a = suggestSkillsAndTools(inputValue), suggestedSkills = _a.suggestedSkills, suggestedTools = _a.suggestedTools;
            // làm mới lại dropdown ul khi input thay đổi
            suggestionList.innerHTML = "";
            // thêm sự kiện click vào từng thẻ li để chọn skill or tool
            if (suggestedSkills !== null) {
                suggestedSkills.forEach(function (suggestion) {
                    var listItem = document.createElement("li");
                    listItem.classList.add("cursor-pointer", "border", "boder-b-2", "py-3", "px-4");
                    listItem.textContent = suggestion;
                    suggestionList.classList.remove("hidden");
                    listItem.addEventListener("click", function () {
                        // render dữ liệu đã chọn vào container
                        renderSelectedSkill(suggestion);
                        // clear dropdown ul khi đã chọn 1 option li
                        suggestionList.innerHTML = "";
                        inputField.value = "";
                        suggestionList.classList.add("hidden");
                    });
                    // thêm option li vào ul khi input thay đổi
                    suggestionList.appendChild(listItem);
                });
            }
            if (suggestedTools !== null) {
                suggestedTools.forEach(function (suggestion) {
                    var listItem = document.createElement("li");
                    listItem.classList.add("cursor-pointer", "border", "boder-b-2", "py-3", "px-4");
                    listItem.textContent = suggestion;
                    suggestionList.classList.remove("hidden");
                    listItem.addEventListener("click", function () {
                        // render dữ liệu đã chọn vào container
                        renderSelectedTool(suggestion);
                        // clear dropdown ul khi đã chọn 1 option li
                        suggestionList.innerHTML = "";
                        inputField.value = "";
                        suggestionList.classList.add("hidden");
                    });
                    // thêm option li vào ul khi input thay đổi
                    suggestionList.appendChild(listItem);
                });
            }
        }
        else {
            // clear list option li khi input trống
            suggestionList.innerHTML = "";
            suggestionList.classList.add("hidden");
        }
    }
}
document
    .getElementById("inputField")
    .addEventListener("input", handleInputChange);
// Experience UI
var experienceIcon = document.getElementById("experienceIcon");
var displayExperience = document.getElementById("displayExperience");
var iExp = 0;
experienceIcon.addEventListener('click', function () {
    iExp += 1;
    var htmlContent = "\n    <div id=\"expChildrenDisplay".concat(iExp, "\">\n      <i id=\"binExpIcon").concat(iExp, "\" onclick=\"eventBin.removeExpChildrenDisplay('expChildrenDisplay").concat(iExp, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>Job position</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"jobPosition w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>Company</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"company w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>Start Date</p>\n        <input\n          type=\"date\"\n          spellcheck=\"false\"\n          class=\"startDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>End Date</p>\n        <input\n          type=\"date\"\n          spellcheck=\"false\"\n          class=\"endDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-start mt-4\">\n        <p>Description</p>\n        <textarea\n          spellcheck=\"false\"\n          name=\"expDescription\"\n          cols=\"60\"\n          rows=\"5\"\n          class=\"expDescription border border-gray-300 py-3 px-3\"></textarea>\n      </div>\n      <div class=\"h-0.5 w-full bg-black my-5\"></div>\n    </div>\n  ");
    displayExperience.insertAdjacentHTML('beforeend', htmlContent);
});
var educationIcon = document.getElementById("educationIcon");
var displayEducation = document.getElementById('displayEducation');
var iEducation = 0;
educationIcon.addEventListener('click', function () {
    iEducation += 1;
    var htmlContent = "\n    <div id=\"eduChildrenDisplay".concat(iEducation, "\" class=\"flex flex-col gap-4 mt-5\">\n    <i id=\"binEdu").concat(iEducation, "\" onclick=\"eventBin.removeEduChildrenDisplay('eduChildrenDisplay").concat(iEducation, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>Major</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"major").concat(iEducation, " w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>Degree</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"degree").concat(iEducation, " w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>School</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"school").concat(iEducation, " w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>Graduation Year</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"graduationYear").concat(iEducation, " w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none\" />\n      </div>\n    </div>\n  ");
    displayEducation.insertAdjacentHTML('beforeend', htmlContent);
});
window.eventBin = {
    removeDescription: function () {
        document.querySelector('.description').remove();
        document.getElementById('binDescription').remove();
        descriptonIconUI.classList.remove('hidden');
    },
    removeEmail: function () {
        document.querySelector('.email').remove();
        document.getElementById('binEmail').remove();
        emailIconUI.classList.remove('hidden');
    },
    removeLinkedin: function () {
        document.querySelector('.linkedin').remove();
        document.getElementById('binLinkedin').remove();
        linkedinIconUI.classList.remove('hidden');
    },
    removePhone: function () {
        document.querySelector('.phone').remove();
        document.getElementById('binPhone').remove();
        phoneIconUI.classList.remove('hidden');
    },
    removeSkillInput: function (idSkillInput) {
        document.getElementById(idSkillInput).remove();
    },
    removeToolInput: function (idToolInput) {
        document.getElementById(idToolInput).remove();
    },
    removeExpChildrenDisplay: function (id) {
        document.getElementById(id).remove();
    },
    removeEduChildrenDisplay: function (id) {
        document.getElementById(id).remove();
    }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRQb3N0Q3YuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QyxJQUFNLHlCQUF5QixHQUFhO0lBQzFDLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWixPQUFPO0lBQ1AsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGlDQUFpQztJQUNqQyxnREFBZ0Q7SUFDaEQsdUNBQXVDO0lBQ3ZDLGdDQUFnQztDQUNqQyxDQUFDO0FBRUYsdUNBQXVDO0FBQ3ZDLElBQU0sd0JBQXdCLEdBQWE7SUFDekMsUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixLQUFLO0lBQ0wsUUFBUTtJQUNSLFFBQVE7SUFDUixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLHVDQUF1QztJQUN2QyxpQ0FBaUM7Q0FDbEMsQ0FBQztBQUVGLG9DQUFvQztBQUNwQyxJQUFNLDBCQUEwQixHQUFhO0lBQzNDLHNEQUFzRDtJQUN0RCw2Q0FBNkM7SUFDN0MsMENBQTBDO0lBQzFDLGdFQUFnRTtJQUNoRSwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztJQUNoQywrQkFBK0I7Q0FDaEMsQ0FBQztBQUVGLG9DQUFvQztBQUNwQyxJQUFNLHlCQUF5QixHQUFhO0lBQzFDLHFGQUFxRjtJQUNyRiw0Q0FBNEM7SUFDNUMsaURBQWlEO0lBQ2pELHlEQUF5RDtJQUN6RCwyREFBMkQ7SUFDM0Qsb0RBQW9EO0lBQ3BELHFDQUFxQztJQUNyQywrQ0FBK0M7Q0FDaEQsQ0FBQztBQUdLLElBQU0sTUFBTSxtQ0FDZCx5QkFBeUIsU0FDekIsMEJBQTBCLE9BQzlCLENBQUM7QUFFSyxJQUFNLEtBQUssbUNBQ2Isd0JBQXdCLFNBQ3hCLHlCQUF5QixPQUM3QixDQUFDOzs7Ozs7O1VDM0VGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7QUFFbEQsaUJBQWlCO0FBQ2pCLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQWlCO0FBQ2hGLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBb0I7QUFDdkYsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFvQjtBQUV6RixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3ZDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxpVUFRN0I7SUFDRCxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQztBQUNGLGFBQWE7QUFDYixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBaUIsQ0FBQztBQUN2RSxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBaUIsQ0FBQztBQUM3RSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBaUIsQ0FBQztBQUV2RSxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBb0IsQ0FBQztBQUM5RSxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFvQixDQUFDO0FBQ3BGLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFvQixDQUFDO0FBRTlFLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFpQixDQUFDO0FBQzdFLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzdDLGlCQUFpQixDQUNGLENBQUM7QUFDbEIsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQWlCLENBQUM7QUFFN0UsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNsQyxZQUFZLENBQUMsU0FBUyxHQUFHLG9SQU14QixDQUFDO0lBQ0YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3JDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsMlJBTTNCLENBQUM7SUFDRixjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxxU0FNeEIsQ0FBQztJQUNGLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWTtBQUNaLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFpQixDQUFDO0FBQy9FLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFpQixDQUFDO0FBRXpFLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNwQixVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ25DLFdBQVcsSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSSxXQUFXLEdBQUcsb0NBQ0ssV0FBVyw4UUFLYixXQUFXLCtEQUFtRCxXQUFXLDZFQUU3RjtJQUVELGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVO0FBQ1YsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQWlCLENBQUM7QUFDN0UsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQWlCLENBQUM7QUFDdkUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsVUFBVSxJQUFHLENBQUMsQ0FBQztJQUNmLElBQUksV0FBVyxHQUFHLG1DQUNJLFVBQVUsNFFBS1osVUFBVSw2REFBaUQsVUFBVSw2RUFFeEY7SUFFRCxZQUFZLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQyxDQUFDO0FBT0gsNkJBQTZCO0FBQzdCLFNBQVMscUJBQXFCLENBQUMsS0FBYTtJQUMxQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLElBQU0sZUFBZSxHQUFhLGdEQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztRQUNwRCxZQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFuQyxDQUFtQyxDQUNwQyxDQUFDO0lBQ0YsSUFBTSxjQUFjLEdBQWEsK0NBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO1FBQ2pELFdBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQWxDLENBQWtDLENBQ25DLENBQUM7SUFFRixvREFBb0Q7SUFDcEQsT0FBTztRQUNMLGVBQWUsRUFBRSxlQUFlO1FBQ2hDLGNBQWMsRUFBRSxjQUFjO0tBQy9CLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFhO0lBQ3hDLCtDQUErQztJQUM3QyxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDM0MsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUVyQyx5Q0FBeUM7SUFDekMsYUFBYSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsSUFBWTtJQUN0QywrQ0FBK0M7SUFDN0MsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDekMsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFFbkMsd0NBQXdDO0lBQ3hDLFlBQVksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRUQsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBRXhCLFNBQVMsaUJBQWlCO0lBQ3hCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFxQixDQUFDO0lBQzdFLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVqRSxJQUFJLFVBQVUsSUFBSSxjQUFjLEVBQUU7UUFDaEMsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUVsQyw4RUFBOEU7UUFDOUUsSUFBSSxVQUFVLEtBQUssY0FBYyxFQUFFO1lBQ2pDLCtEQUErRDtZQUN6RCxTQUNKLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUQzQixlQUFlLHVCQUFFLGNBQWMsb0JBQ0osQ0FBQztZQUVwQyw2Q0FBNkM7WUFDN0MsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFOUIsMkRBQTJEO1lBQzNELElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtnQkFDNUIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7b0JBQ2pDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNoRixRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztvQkFDbEMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO29CQUV6QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUNqQyx1Q0FBdUM7d0JBQ3ZDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNoQyw0Q0FBNEM7d0JBQzVDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO3dCQUM5QixVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUU7d0JBQ3JCLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLENBQUM7b0JBRUgsMkNBQTJDO29CQUMzQyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxjQUFjLEtBQUssSUFBSSxFQUFFO2dCQUMzQixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtvQkFDaEMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2hGLFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUNsQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBRXpDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7d0JBQ2pDLHVDQUF1Qzt3QkFDdkMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQy9CLDRDQUE0Qzt3QkFDNUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRTt3QkFDckIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO29CQUN4QyxDQUFDLENBQUMsQ0FBQztvQkFFSCwyQ0FBMkM7b0JBQzNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsdUNBQXVDO1lBQ3ZDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzlCLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQUVELFFBQVE7S0FDTCxjQUFjLENBQUMsWUFBWSxDQUFDO0tBQzVCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBR2hELGdCQUFnQjtBQUNoQixJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFpQjtBQUNoRixJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQW9CO0FBQ3pGLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNiLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNWLElBQUksV0FBVyxHQUFHLDRDQUNhLElBQUksMENBQ1osSUFBSSwrRUFBbUUsSUFBSSwwZ0RBd0NqRztJQUVELGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7QUFDaEUsQ0FBQyxDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQWlCO0FBQzlFLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBb0I7QUFDdkYsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRW5CLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDdEMsVUFBVSxJQUFJLENBQUMsQ0FBQztJQUNoQixJQUFJLFdBQVcsR0FBRyw0Q0FDYSxVQUFVLHVFQUN4QixVQUFVLCtFQUFtRSxVQUFVLHFQQU1sRixVQUFVLDBSQU9ULFVBQVUsMFJBT1YsVUFBVSwyU0FPRixVQUFVLGdIQUd4QztJQUVELGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0FBaUJGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDaEIsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoRCxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQztJQUNELFdBQVcsRUFBRTtRQUNYLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hELGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxXQUFXLEVBQUU7UUFDWCxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxVQUFDLFlBQW9CO1FBQ3JDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELGVBQWUsRUFBRSxVQUFDLFdBQW1CO1FBQ25DLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNELHdCQUF3QixFQUFFLFVBQUMsRUFBVTtRQUNuQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx3QkFBd0IsRUFBRSxVQUFDLEVBQVU7UUFDbkMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrLy4vc3JjL2RhdGEvZGF0YUNWLnRzIiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZS1iYXNlLXdlYnBhY2svLi9zcmMvY29udHJvbGxlcnMvZnVuY3Rpb25FdmVudC9ldmVudFBvc3RDdi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBN4bqjbmcga+G7uSBuxINuZyBjaG8gUGjDoXQgdHJp4buDbiBQaOG6p24gbeG7gW1cclxuY29uc3Qgc2tpbGxzU29mdHdhcmVEZXZlbG9wbWVudDogc3RyaW5nW10gPSBbXHJcbiAgJ0hUTUw1JyxcclxuICAnQ1NTMycsXHJcbiAgJ0phdmFzY3JpcHQnLFxyXG4gICdUeXBlc2NyaXB0JyxcclxuICAnUmVhY3QnLFxyXG4gICdBbmd1bGFyJyxcclxuICAnVnVlanMnLFxyXG4gICdOdXh0anMnLFxyXG4gICdOZXN0anMnLFxyXG4gICdRdeG6o24gbMO9IFBoacOqbiBi4bqjbjogR2l0JyxcclxuICAnTW9uZ29EQicsXHJcbiAgJ015c3FsJyxcclxuICAnU3FsIHNlcnZlcicsXHJcbiAgJ1Bvc3RncmVTUUwnLFxyXG4gICdSRVNUZnVsIEFQSXMnLFxyXG4gICdLaeG7g20gdGjhu606IEplc3QsIE1vY2hhLCBTZWxlbml1bScsXHJcbiAgJ1Ryw6xuaCBxdeG6o24gbMO9IEThu7Egw6FuIHbDoCBHw7NpIHBo4bqnbiBt4buBbTogbnBtLCBZYXJuJyxcclxuICAnQmnDqm4gZOG7i2NoIHbDoCDEkMOzbmcgZ8OzaTogV2VicGFjaywgQmFiZWwnLFxyXG4gICdLaeG6v24gdGjhu6ljIHbhu4EgQW4gdG/DoG4gVGjDtG5nIHRpbicsXHJcbl07XHJcblxyXG4vLyBN4bqjbmcgY8O0bmcgY+G7pSBjaG8gUGjDoXQgdHJp4buDbiBQaOG6p24gbeG7gW1cclxuY29uc3QgdG9vbHNTb2Z0d2FyZURldmVsb3BtZW50OiBzdHJpbmdbXSA9IFtcclxuICAnVHJlbGxvJyxcclxuICAnSmlyYScsXHJcbiAgJ1NsYWNrJyxcclxuICAnUG9zdG1hbicsXHJcbiAgJ0RldlRvb2xzJyxcclxuICAnR2l0JyxcclxuICAnR2l0SHViJyxcclxuICAnR2l0TGFiJyxcclxuICAnRmlnbWEnLFxyXG4gICdNb25nb0RCIENvbXBhc3MnLFxyXG4gICdNeVNRTCBXb3JrYmVuY2gnLFxyXG4gICdCaXRidWNrZXQnLFxyXG4gICdUcmF2aXMgQ0knLFxyXG4gICdDw7RuZyBj4bulIFBow6JuIHTDrWNoIE3DoyBuZ3Xhu5NuOiBTb25hclF1YmUnLFxyXG4gICdRdeG6o24gbMO9IEfDs2kgcGjhuqduIG3hu4FtOiBucG0sIHlhcm4nLFxyXG5dO1xyXG5cclxuLy8gTeG6o25nIGvhu7kgbsSDbmcgY2hvIFF14bqjbiBsw70gSOG7hyB0aOG7kW5nXHJcbmNvbnN0IHNraWxsc1N5c3RlbUFkbWluaXN0cmF0aW9uOiBzdHJpbmdbXSA9IFtcclxuICAnSOG7hyDEkWnhu4F1IGjDoG5oOiBMaW51eCAoVWJ1bnR1LCBDZW50T1MpLCBXaW5kb3dzIFNlcnZlcicsXHJcbiAgJ0PDtG5nIG5naOG7hyDEkMOhbSBtw6J5OiBBV1MsIEF6dXJlLCBHb29nbGUgQ2xvdWQnLFxyXG4gICdEb2NrZXIgdsOgIENvbnRhaW5lcnM6IERvY2tlciwgS3ViZXJuZXRlcycsXHJcbiAgJ0PDtG5nIGPhu6UgVOG7sSDEkeG7mW5nIGjDs2EgdsOgIFF14bqjbiBsw70gQ+G6pXUgaMOsbmg6IEFuc2libGUsIFB1cHBldCwgQ2hlZicsXHJcbiAgJ1F14bqjbiBsw70gROG7sSDDoW4gdsOgIMSQaeG7gXUgcGjhu5FpOiBBZ2lsZSwgU2NydW0nLFxyXG4gICdLaeG7g20gdGjhu60gdsOgIEdp4bqjIGzhuq1wIEjhu4cgdGjhu5FuZzogU2VsZW5pdW0sIEpNZXRlcicsXHJcbiAgJ092ZXJzZWVpbmcgQ8O0bmcgbmdo4buHIFRow7RuZyB0aW4nLFxyXG4gICdLaeG6v24gdGjhu6ljIHbhu4EgQuG6o28gbeG6rXQgSOG7hyB0aOG7kW5nJyxcclxuXTtcclxuXHJcbi8vIE3huqNuZyBjw7RuZyBj4bulIGNobyBRdeG6o24gbMO9IEjhu4cgdGjhu5FuZ1xyXG5jb25zdCB0b29sc1N5c3RlbUFkbWluaXN0cmF0aW9uOiBzdHJpbmdbXSA9IFtcclxuICAnQ8O0bmcgY+G7pSDEkMOhbSBtw6J5IHbDoCBRdeG6o24gbMO9IEjhuqEgdOG6p25nOiBBV1MgQ29uc29sZSwgQXp1cmUgUG9ydGFsLCBHb29nbGUgQ2xvdWQgQ29uc29sZScsXHJcbiAgJ0PDtG5nIGPhu6UgVOG7sSDEkeG7mW5nIGjDs2E6IEFuc2libGUsIFB1cHBldCwgQ2hlZicsXHJcbiAgJ0NvbnRhaW5lcnMgdsOgIE9yY2hlc3RyYXRpb246IERvY2tlciwgS3ViZXJuZXRlcycsXHJcbiAgJ0PDtG5nIGPhu6UgR2nDoW0gc8OhdCB2w6AgTG9nOiBQcm9tZXRoZXVzLCBHcmFmYW5hLCBFTEsgU3RhY2snLFxyXG4gICdRdeG6o24gbMO9IFBoacOqbiBi4bqjbiB2w6AgVOG7sSDEkeG7mW5nIEjDs2E6IEdpdCwgSmVua2lucywgVHJhdmlzIENJJyxcclxuICAnQ8O0bmcgY+G7pSBC4bqjbyBt4bqtdDogTmVzc3VzLCBXaXJlc2hhcmssIFNlY3VyaXR5IE9uaW9uJyxcclxuICAnQ8O0bmcgY+G7pSBRdeG6o24gbMO9IEPhuqV1IGjDrG5oOiBUZXJyYWZvcm0nLFxyXG4gICdUcsOsbmggUXXhuqNuIGzDvSBDb250YWluZXI6IEt1YmVybmV0ZXMgRGFzaGJvYXJkJyxcclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzOiBzdHJpbmdbXSA9IFtcclxuICAuLi5za2lsbHNTb2Z0d2FyZURldmVsb3BtZW50LFxyXG4gIC4uLnNraWxsc1N5c3RlbUFkbWluaXN0cmF0aW9uXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdG9vbHM6IHN0cmluZ1tdID0gW1xyXG4gIC4uLnRvb2xzU29mdHdhcmVEZXZlbG9wbWVudCxcclxuICAuLi50b29sc1N5c3RlbUFkbWluaXN0cmF0aW9uXHJcbl07XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNraWxscywgdG9vbHMgfSBmcm9tIFwiLi4vLi4vZGF0YS9kYXRhQ1ZcIjtcclxuXHJcbi8vIERlc2NyaXB0aW9uIFVJXHJcbmNvbnN0IGRlc2NyaXB0b25JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdG9uSWNvblwiKSEgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgZGVzY3JpcHRvbkljb25VSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRvbkljb25VSVwiKSEgYXMgSFRNTERpdkVsZW1lbnRcclxuY29uc3QgZGlzcGxheURlc2NyaXB0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlEZXNjcmlwdG9uXCIpISBhcyBIVE1MRGl2RWxlbWVudFxyXG5cclxuZGVzY3JpcHRvbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5RGVzY3JpcHRvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWFcclxuICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29scz1cIjQ1XCJcclxuICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvbiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB5LTMgcHgtM1wiPjwvdGV4dGFyZWE+XHJcbiAgICA8aSBpZD1cImJpbkRlc2NyaXB0aW9uXCIgb25jbGljaz1cImV2ZW50QmluLnJlbW92ZURlc2NyaXB0aW9uKClcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICBgXHJcbiAgZGVzY3JpcHRvbkljb25VSS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSlcclxuLy8gQ29udGFjdCBVSVxyXG5jb25zdCBlbWFpbEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsSWNvblwiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbmNvbnN0IGxpbmtlZGluSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua2VkaW5JY29uXCIpISBhcyBIVE1MRWxlbWVudDtcclxuY29uc3QgcGhvbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG9uZUljb25cIikhIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuY29uc3QgZW1haWxJY29uVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsSWNvblVJXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgbGlua2VkaW5JY29uVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtlZGluSWNvblVJXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgcGhvbmVJY29uVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lSWNvblVJXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmNvbnN0IGRpc3BsYXlFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheUVtYWlsXCIpISBhcyBIVE1MRWxlbWVudDtcclxuY29uc3QgZGlzcGxheUxpbmtlZGluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJkaXNwbGF5TGlua2VkaW5cIlxyXG4pISBhcyBIVE1MRWxlbWVudDtcclxuY29uc3QgZGlzcGxheVBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5UGhvbmVcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuZW1haWxJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZGlzcGxheUVtYWlsLmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dFxyXG4gICAgdHlwZT1cImVtYWlsXCJcclxuICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICBjbGFzcz1cImVtYWlsIG1sLTIgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgPGkgaWQ9XCJiaW5FbWFpbFwiIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVFbWFpbCgpXCIgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gY3Vyc29yLXBvaW50ZXJcIj48L2k+XHJcbiAgYDtcclxuICBlbWFpbEljb25VSS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSk7XHJcblxyXG5saW5rZWRpbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5TGlua2VkaW4uaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0XHJcbiAgICB0eXBlPVwidXJsXCJcclxuICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICBjbGFzcz1cImxpbmtlZGluIG1sLTIgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgPGkgaWQ9XCJiaW5MaW5rZWRpblwiIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVMaW5rZWRpbigpXCIgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gY3Vyc29yLXBvaW50ZXJcIj48L2k+XHJcbiAgYDtcclxuICBsaW5rZWRpbkljb25VSS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSk7XHJcblxyXG5waG9uZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5UGhvbmUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0XHJcbiAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICBjbGFzcz1cInBob25lIG1sLTIgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmUgYXBwZWFyYW5jZS1ub25lXCIgLz5cclxuICAgIDxpIGlkPVwiYmluUGhvbmVcIiBvbmNsaWNrPVwiZXZlbnRCaW4ucmVtb3ZlUGhvbmUoKVwiIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGN1cnNvci1wb2ludGVyXCI+PC9pPlxyXG4gIGA7XHJcbiAgcGhvbmVJY29uVUkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuLy8gU2tpbGxzIFVJXHJcbmNvbnN0IGRpc3BsYXlTa2lsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlTa2lsbHNcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBza2lsbHNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHNJY29uXCIpISBhcyBIVE1MRWxlbWVudDtcclxuXHJcbmxldCBpU2tpbGxJbnB1dCA9IDA7XHJcbnNraWxsc0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpU2tpbGxJbnB1dCArPSAxO1xyXG4gIGxldCBodG1sQ29udGVudCA9IGBcclxuICAgIDxkaXYgaWQ9XCJza2lsbElucHV0JHtpU2tpbGxJbnB1dH1cIiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgIGNsYXNzPVwic2tpbGxJbnB1dCBtbC0yIHctWzMwMHB4XSBoLVszMHB4XSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBweC0yIHB5LTMgZm9jdXM6b3V0bGluZS1ub25lIGFwcGVhcmFuY2Utbm9uZVwiIC8+XHJcbiAgICAgIDxpIGlkPVwiYmluU2tpbGwke2lTa2lsbElucHV0fVwiIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVTa2lsbElucHV0KCdza2lsbElucHV0JHtpU2tpbGxJbnB1dH0nKVwiIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGN1cnNvci1wb2ludGVyXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxuICBkaXNwbGF5U2tpbGxzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyAsaHRtbENvbnRlbnQpO1xyXG59KTtcclxuXHJcbi8vIFRvb2wgVUlcclxuY29uc3QgZGlzcGxheVRvb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5VG9vbHNcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCB0b29sc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvb2xzSWNvblwiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbmxldCBpVG9vbElucHV0ID0gMDtcclxudG9vbHNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaVRvb2xJbnB1dCArPTE7XHJcbiAgbGV0IGh0bWxDb250ZW50ID0gYFxyXG4gICAgPGRpdiBpZD1cInRvb2xJbnB1dCR7aVRvb2xJbnB1dH1cIiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgIGNsYXNzPVwidG9vbElucHV0IG1sLTIgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmUgYXBwZWFyYW5jZS1ub25lXCIgLz5cclxuICAgICAgPGkgaWQ9XCJiaW5Ub29sJHtpVG9vbElucHV0fVwiIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVUb29sSW5wdXQoJ3Rvb2xJbnB1dCR7aVRvb2xJbnB1dH0nKVwiIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGN1cnNvci1wb2ludGVyXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxuICBkaXNwbGF5VG9vbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnICxodG1sQ29udGVudCk7XHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFN1Z2dlc3RlZERhdGEge1xyXG4gIHN1Z2dlc3RlZFNraWxsczogc3RyaW5nW107XHJcbiAgc3VnZ2VzdGVkVG9vbHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vLyBmaW5kIGRhdGEgZnJvbSBpbnB1dCB2YWx1ZVxyXG5mdW5jdGlvbiBzdWdnZXN0U2tpbGxzQW5kVG9vbHMoaW5wdXQ6IHN0cmluZyk6IFN1Z2dlc3RlZERhdGEge1xyXG4gIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBzdWdnZXN0ZWRTa2lsbHM6IHN0cmluZ1tdID0gc2tpbGxzLmZpbHRlcigoc2tpbGwpID0+XHJcbiAgICBza2lsbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0KVxyXG4gICk7XHJcbiAgY29uc3Qgc3VnZ2VzdGVkVG9vbHM6IHN0cmluZ1tdID0gdG9vbHMuZmlsdGVyKCh0b29sKSA9PlxyXG4gICAgdG9vbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0KVxyXG4gICk7XHJcblxyXG4gIC8vIHRy4bqjIHbhu4EgbeG6o25nIGRhdGEgZOG7ryBsaeG7h3Uga2jhu5twIHbhu5tpIHZhbHVlIGPhu6dhIGlucHV0XHJcbiAgcmV0dXJuIHtcclxuICAgIHN1Z2dlc3RlZFNraWxsczogc3VnZ2VzdGVkU2tpbGxzLFxyXG4gICAgc3VnZ2VzdGVkVG9vbHM6IHN1Z2dlc3RlZFRvb2xzLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGVkU2tpbGwoc2tpbGw6IHN0cmluZykge1xyXG4gIC8vIFThuqFvIG3hu5l0IHRo4bq7IHNwYW4gxJHhu4MgaGnhu4NuIHRo4buLIGvhu7kgbsSDbmcgxJHDoyBjaOG7jW5cclxuICAgIGNvbnN0IHNlbGVjdGVkU2tpbGxUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNlbGVjdGVkU2tpbGxUYWcuY2xhc3NMaXN0LmFkZChcInNraWxsU3BhblwiKVxyXG4gICAgc2VsZWN0ZWRTa2lsbFRhZy50ZXh0Q29udGVudCA9IHNraWxsO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5l0IHRo4bq7IHNwYW4gdsOgbyBjb250YWluZXIgc2tpbGxzXHJcbiAgICBkaXNwbGF5U2tpbGxzLmluc2VydEJlZm9yZShzZWxlY3RlZFNraWxsVGFnLCBkaXNwbGF5U2tpbGxzLmZpcnN0Q2hpbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTZWxlY3RlZFRvb2wodG9vbDogc3RyaW5nKSB7XHJcbiAgLy8gVOG6oW8gbeG7mXQgdGjhursgc3BhbiDEkeG7gyBoaeG7g24gdGjhu4sga+G7uSBuxINuZyDEkcOjIGNo4buNblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRUb29sVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzZWxlY3RlZFRvb2xUYWcuY2xhc3NMaXN0LmFkZChcInRvb2xTcGFuXCIpXHJcbiAgICBzZWxlY3RlZFRvb2xUYWcudGV4dENvbnRlbnQgPSB0b29sO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5l0IHRo4bq7IHNwYW4gdsOgbyBjb250YWluZXIgdG9vbHNcclxuICAgIGRpc3BsYXlUb29scy5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRUb29sVGFnLCBkaXNwbGF5VG9vbHMuZmlyc3RDaGlsZCk7XHJcbn1cclxuXHJcbmxldCBwcmV2SW5wdXRWYWx1ZSA9IFwiXCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZSgpIHtcclxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZpZWxkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3Qgc3VnZ2VzdGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Z2dlc3Rpb25MaXN0XCIpO1xyXG5cclxuICBpZiAoaW5wdXRGaWVsZCAmJiBzdWdnZXN0aW9uTGlzdCkge1xyXG4gICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xyXG5cclxuICAgIC8vIEtp4buDbSB0cmEgeGVtIGdpw6EgdHLhu4sgxJHDoyB0aGF5IMSR4buVaSBoYXkgY2jGsGEgPT4ga2jDoWMgcuG7l25nIHRow6wgdGjhu7FjIGhp4buHbiByZW5kZXJcclxuICAgIGlmIChpbnB1dFZhbHVlICE9PSBwcmV2SW5wdXRWYWx1ZSkge1xyXG4gICAgICAvLyBsxrB1IG3huqNuZyBkYXRhIHTDrG0gdGjhuqV5IHbDoG8gc3VnZ2VzdGVkU2tpbGxzIHx8IHN1Z2dlc3RlZFRvb2xzXHJcbiAgICAgIGNvbnN0IHsgc3VnZ2VzdGVkU2tpbGxzLCBzdWdnZXN0ZWRUb29scyB9ID1cclxuICAgICAgICBzdWdnZXN0U2tpbGxzQW5kVG9vbHMoaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgICAvLyBsw6BtIG3hu5tpIGzhuqFpIGRyb3Bkb3duIHVsIGtoaSBpbnB1dCB0aGF5IMSR4buVaVxyXG4gICAgICBzdWdnZXN0aW9uTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgLy8gdGjDqm0gc+G7sSBraeG7h24gY2xpY2sgdsOgbyB04burbmcgdGjhursgbGkgxJHhu4MgY2jhu41uIHNraWxsIG9yIHRvb2xcclxuICAgICAgaWYgKHN1Z2dlc3RlZFNraWxscyAhPT0gbnVsbCkge1xyXG4gICAgICAgIHN1Z2dlc3RlZFNraWxscy5mb3JFYWNoKChzdWdnZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3ItcG9pbnRlclwiLCBcImJvcmRlclwiLCBcImJvZGVyLWItMlwiLCBcInB5LTNcIiwgXCJweC00XCIpO1xyXG4gICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBzdWdnZXN0aW9uO1xyXG4gICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxyXG5cclxuICAgICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlbmRlciBk4buvIGxp4buHdSDEkcOjIGNo4buNbiB2w6BvIGNvbnRhaW5lclxyXG4gICAgICAgICAgICByZW5kZXJTZWxlY3RlZFNraWxsKHN1Z2dlc3Rpb24pO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBkcm9wZG93biB1bCBraGkgxJHDoyBjaOG7jW4gMSBvcHRpb24gbGlcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gdGjDqm0gb3B0aW9uIGxpIHbDoG8gdWwga2hpIGlucHV0IHRoYXkgxJHhu5VpXHJcbiAgICAgICAgICBzdWdnZXN0aW9uTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1Z2dlc3RlZFRvb2xzICE9PSBudWxsKSB7XHJcbiAgICAgICAgc3VnZ2VzdGVkVG9vbHMuZm9yRWFjaCgoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLXBvaW50ZXJcIiwgXCJib3JkZXJcIiAsXCJib2Rlci1iLTJcIiwgXCJweS0zXCIsIFwicHgtNFwiKTtcclxuICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gc3VnZ2VzdGlvbjtcclxuICAgICAgICAgIHN1Z2dlc3Rpb25MaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcclxuXHJcbiAgICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZW5kZXIgZOG7ryBsaeG7h3UgxJHDoyBjaOG7jW4gdsOgbyBjb250YWluZXJcclxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0ZWRUb29sKHN1Z2dlc3Rpb24pO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBkcm9wZG93biB1bCBraGkgxJHDoyBjaOG7jW4gMSBvcHRpb24gbGlcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gdGjDqm0gb3B0aW9uIGxpIHbDoG8gdWwga2hpIGlucHV0IHRoYXkgxJHhu5VpXHJcbiAgICAgICAgICBzdWdnZXN0aW9uTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNsZWFyIGxpc3Qgb3B0aW9uIGxpIGtoaSBpbnB1dCB0cuG7kW5nXHJcbiAgICAgIHN1Z2dlc3Rpb25MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHN1Z2dlc3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGaWVsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXRDaGFuZ2UpO1xyXG5cclxuXHJcbi8vIEV4cGVyaWVuY2UgVUlcclxuY29uc3QgZXhwZXJpZW5jZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGVyaWVuY2VJY29uXCIpISBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCBkaXNwbGF5RXhwZXJpZW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheUV4cGVyaWVuY2VcIikhIGFzIEhUTUxEaXZFbGVtZW50XHJcbmxldCBpRXhwID0gMDtcclxuZXhwZXJpZW5jZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaUV4cCArPSAxO1xyXG4gIGxldCBodG1sQ29udGVudCA9IGBcclxuICAgIDxkaXYgaWQ9XCJleHBDaGlsZHJlbkRpc3BsYXkke2lFeHB9XCI+XHJcbiAgICAgIDxpIGlkPVwiYmluRXhwSWNvbiR7aUV4cH1cIiBvbmNsaWNrPVwiZXZlbnRCaW4ucmVtb3ZlRXhwQ2hpbGRyZW5EaXNwbGF5KCdleHBDaGlsZHJlbkRpc3BsYXkke2lFeHB9JylcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+Sm9iIHBvc2l0aW9uPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiam9iUG9zaXRpb24gdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+Q29tcGFueTwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICBjbGFzcz1cImNvbXBhbnkgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+U3RhcnQgRGF0ZTwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICBjbGFzcz1cInN0YXJ0RGF0ZSB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8cD5FbmQgRGF0ZTwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICBjbGFzcz1cImVuZERhdGUgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtc3RhcnQgbXQtNFwiPlxyXG4gICAgICAgIDxwPkRlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIG5hbWU9XCJleHBEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb2xzPVwiNjBcIlxyXG4gICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgY2xhc3M9XCJleHBEZXNjcmlwdGlvbiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB5LTMgcHgtM1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaC0wLjUgdy1mdWxsIGJnLWJsYWNrIG15LTVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxuXHJcbiAgZGlzcGxheUV4cGVyaWVuY2UuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sQ29udGVudClcclxufSlcclxuXHJcbmNvbnN0IGVkdWNhdGlvbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhdGlvbkljb25cIikhIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IGRpc3BsYXlFZHVjYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheUVkdWNhdGlvbicpISBhcyBIVE1MRGl2RWxlbWVudFxyXG5sZXQgaUVkdWNhdGlvbiA9IDA7XHJcblxyXG5lZHVjYXRpb25JY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlFZHVjYXRpb24gKz0gMTtcclxuICBsZXQgaHRtbENvbnRlbnQgPSBgXHJcbiAgICA8ZGl2IGlkPVwiZWR1Q2hpbGRyZW5EaXNwbGF5JHtpRWR1Y2F0aW9ufVwiIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBtdC01XCI+XHJcbiAgICA8aSBpZD1cImJpbkVkdSR7aUVkdWNhdGlvbn1cIiBvbmNsaWNrPVwiZXZlbnRCaW4ucmVtb3ZlRWR1Q2hpbGRyZW5EaXNwbGF5KCdlZHVDaGlsZHJlbkRpc3BsYXkke2lFZHVjYXRpb259JylcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+TWFqb3I8L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtYWpvciR7aUVkdWNhdGlvbn0gdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+RGVncmVlPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiZGVncmVlJHtpRWR1Y2F0aW9ufSB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8cD5TY2hvb2w8L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzY2hvb2wke2lFZHVjYXRpb259IHctWzMwMHB4XSBoLVszMHB4XSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBweC0yIHB5LTMgZm9jdXM6b3V0bGluZS1ub25lXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxwPkdyYWR1YXRpb24gWWVhcjwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICBjbGFzcz1cImdyYWR1YXRpb25ZZWFyJHtpRWR1Y2F0aW9ufSB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxuICBkaXNwbGF5RWR1Y2F0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbENvbnRlbnQpXHJcbn0pXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBldmVudEJpbjoge1xyXG4gICAgICByZW1vdmVEZXNjcmlwdGlvbjogKCkgPT4gdm9pZDtcclxuICAgICAgcmVtb3ZlRW1haWw6ICgpID0+IHZvaWQ7XHJcbiAgICAgIHJlbW92ZUxpbmtlZGluOiAoKSA9PiB2b2lkO1xyXG4gICAgICByZW1vdmVQaG9uZTogKCkgPT4gdm9pZDtcclxuICAgICAgcmVtb3ZlU2tpbGxJbnB1dDogKGlkU2tpbGxJbnB1dDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgICByZW1vdmVUb29sSW5wdXQ6IChpZFRvb2xJbnB1dDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgICByZW1vdmVFeHBDaGlsZHJlbkRpc3BsYXk6IChpZEV4cENoaWxkcmVuRGlzcGxheTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgICByZW1vdmVFZHVDaGlsZHJlbkRpc3BsYXk6IChpZEVkdUNoaWxkcmVuRGlzcGxheTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5ldmVudEJpbiA9IHtcclxuICByZW1vdmVEZXNjcmlwdGlvbjogKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmluRGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuICAgIGRlc2NyaXB0b25JY29uVUkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICB9LFxyXG4gIHJlbW92ZUVtYWlsOiAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKS5yZW1vdmUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW5FbWFpbCcpLnJlbW92ZSgpO1xyXG4gICAgZW1haWxJY29uVUkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSxcclxuICByZW1vdmVMaW5rZWRpbjogKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtlZGluJykucmVtb3ZlKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmluTGlua2VkaW4nKS5yZW1vdmUoKTtcclxuICAgIGxpbmtlZGluSWNvblVJLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlUGhvbmU6ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG9uZScpLnJlbW92ZSgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpblBob25lJykucmVtb3ZlKCk7XHJcbiAgICBwaG9uZUljb25VSS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gIH0sXHJcbiAgcmVtb3ZlU2tpbGxJbnB1dDogKGlkU2tpbGxJbnB1dDogc3RyaW5nKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFNraWxsSW5wdXQpLnJlbW92ZSgpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVG9vbElucHV0OiAoaWRUb29sSW5wdXQ6IHN0cmluZykgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRUb29sSW5wdXQpLnJlbW92ZSgpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlRXhwQ2hpbGRyZW5EaXNwbGF5OiAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnJlbW92ZSgpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlRWR1Q2hpbGRyZW5EaXNwbGF5OiAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnJlbW92ZSgpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9