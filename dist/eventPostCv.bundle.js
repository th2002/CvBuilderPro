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
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "C",
    "C#",
    "Go",
    "Rust",
    "Swift",
    "PHP",
    "Kotlin",
    "R",
    "SQL",
    "Assembly",
    "Perl",
    "Ruby",
    "Scala",
    "Dart",
    "Elixir",
    "Elm",
    "Clojure",
    "Haskell",
    "Django",
    "Laravel",
    "Spring Boot",
    "Angular",
    "React",
    "Vue",
    "React Native",
    "Flutter",
    "UIKit",
    "Android SDK",
    "Xamarin",
    "Unity",
    "Unreal Engine",
    "Node.js",
    "Express.js",
    "NestJS",
    "Flask",
    "Ruby on Rails",
    "Grails",
    "Spring MVC",
    "ASP.NET Core",
    "CakePHP",
    "Symfony",
    "Laravel",
    "Yii",
    "Zend Framework",
    "Meteor",
    "Ember.js",
    "Backbone.js",
    "ExtJS",
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
    "Debugger",
    "Linters",
    "Version Control Systems",
    "Build Tools",
    "Continuous Integration/Continuous Delivery (CI/CD)",
    "Containerization",
    "Virtualization",
    "Cloud Computing",
    "DevOps",
    "Security Tools",
    "Management Tools",
    "Analytics Tools",
    "Testing Tools",
    "Documentation Tools",
    "Collaboration Tools",
    "Project Management Tools",
    "Communication Tools",
    "Training Tools",
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
    var htmlContent = "\n    <div id=\"skillInput".concat(iSkillInput, "\" class=\"flex flex-row gap-3 items-center\">\n      <input\n      type=\"text\"\n      spellcheck=\"false\"\n      class=\"skillInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none\" />\n      <i id=\"binSkill").concat(iSkillInput, "\" onclick=\"eventBin.removeSkillInput('skillInput").concat(iSkillInput, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n    </div>\n  ");
    displaySkills.insertAdjacentHTML('beforeend', htmlContent);
});
// Tool UI
var displayTools = document.getElementById("displayTools");
var toolsIcon = document.getElementById("toolsIcon");
var iToolInput = 0;
toolsIcon.addEventListener("click", function () {
    iToolInput += 1;
    var htmlContent = "\n    <div id=\"toolInput".concat(iToolInput, "\" class=\"flex flex-row gap-3 items-center\">\n      <input\n      type=\"text\"\n      spellcheck=\"false\"\n      class=\"toolInput w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none appearance-none\" />\n      <i id=\"binTool").concat(iToolInput, "\" onclick=\"eventBin.removeToolInput('toolInput").concat(iToolInput, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n    </div>\n  ");
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
function renderSelectedSkill(skill, i) {
    // Tạo một thẻ span để hiển thị kỹ năng đã chọn
    var htmlSpanSkill = "\n      <div id=\"spanSkill".concat(i, "\" class=\"flex flex-row gap-4 items-center\">\n        <span class=\"skillSpan w-[100px]\">").concat(skill, "</span>\n        <i onclick=\"eventBin.removeSkillSpan('spanSkill").concat(i, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n      </div>\n    ");
    // Thêm một thẻ span vào container skills
    displaySkills.insertAdjacentHTML('beforebegin', htmlSpanSkill);
}
function renderSelectedTool(tool, i) {
    var htmlSpanTool = "\n      <div id=\"toolSpan".concat(i, "\" class=\"flex flex-row gap-4 items-center\">\n        <span class=\"toolSpan w-[100px]\">").concat(tool, "</span>\n        <i onclick=\"eventBin.removeToolSpan('toolSpan").concat(i, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n      </div>\n    ");
    // Thêm một thẻ span vào container skills
    displayTools.insertAdjacentHTML('beforebegin', htmlSpanTool);
}
var prevInputValue = "";
var iSpanSkill = 0;
var iSpanTool = 0;
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
                        iSpanSkill++;
                        // render dữ liệu đã chọn vào container
                        renderSelectedSkill(suggestion, iSpanSkill);
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
                        iSpanTool++;
                        // render dữ liệu đã chọn vào container
                        renderSelectedTool(suggestion, iSpanTool);
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
    var htmlContent = "\n    <div id=\"expChildrenDisplay".concat(iExp, "\" class=\"flex flex-col gap-3\">\n      <i id=\"binExpIcon").concat(iExp, "\" onclick=\"eventBin.removeExpChildrenDisplay('expChildrenDisplay").concat(iExp, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p class=\"w-[110px]\">Job position</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"jobPosition w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p class=\"w-[110px]\">Company</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"company w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p class=\"w-[110px]\">Start Date</p>\n        <input\n          type=\"date\"\n          spellcheck=\"false\"\n          class=\"startDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p class=\"w-[110px]\">End Date</p>\n        <input\n          type=\"date\"\n          spellcheck=\"false\"\n          class=\"endDate w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-start mt-4\">\n        <p class=\"w-[110px]\">Description</p>\n        <textarea\n          spellcheck=\"false\"\n          name=\"expDescription\"\n          cols=\"60\"\n          rows=\"5\"\n          class=\"expDescription border border-gray-300 py-3 px-3\"></textarea>\n      </div>\n      <div class=\"h-0.5 w-full bg-black my-5\"></div>\n    </div>\n  ");
    displayExperience.insertAdjacentHTML('beforeend', htmlContent);
});
var educationIcon = document.getElementById("educationIcon");
var displayEducation = document.getElementById('displayEducation');
var iEducation = 0;
educationIcon.addEventListener('click', function () {
    iEducation += 1;
    var htmlContent = "\n    <div id=\"eduChildrenDisplay".concat(iEducation, "\" class=\"flex flex-col gap-4 mt-5\">\n    <i id=\"binEdu").concat(iEducation, "\" onclick=\"eventBin.removeEduChildrenDisplay('eduChildrenDisplay").concat(iEducation, "')\" class=\"fa-solid fa-trash-can cursor-pointer\"></i>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p class=\"w-[130px]\">Major</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"major w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p class=\"w-[130px]\">Degree</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"degree w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p class=\"w-[130px]\">School</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"school w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n      <div class=\"flex flex-row gap-4 items-center\">\n        <p>Graduation Year</p>\n        <input\n          type=\"text\"\n          spellcheck=\"false\"\n          class=\"graduationYear w-[300px] h-[30px] border-b-2 border-black px-2 py-3 focus:outline-none bg-[#F9F9F9]\" />\n      </div>\n    </div>\n  ");
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
    removeSkillSpan: function (idDiv) {
        document.getElementById(idDiv).remove();
    },
    removeToolSpan: function (idDiv) {
        document.getElementById(idDiv).remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLFVBQUMsWUFBb0I7UUFDckMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsZUFBZSxFQUFFLFVBQUMsV0FBbUI7UUFDbkMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsZUFBZSxFQUFFLFVBQUMsS0FBYTtRQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCxjQUFjLEVBQUUsVUFBQyxLQUFhO1FBQzVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUNELHdCQUF3QixFQUFFLFVBQUMsRUFBVTtRQUNuQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx3QkFBd0IsRUFBRSxVQUFDLEVBQVU7UUFDbkMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrLy4vc3JjL2RhdGEvZGF0YUNWLnRzIiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZS1iYXNlLXdlYnBhY2svLi9zcmMvY29udHJvbGxlcnMvZnVuY3Rpb25FdmVudC9ldmVudFBvc3RDdi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBN4bqjbmcga+G7uSBuxINuZyBjaG8gUGjDoXQgdHJp4buDbiBQaOG6p24gbeG7gW1cclxuY29uc3Qgc2tpbGxzU29mdHdhcmVEZXZlbG9wbWVudDogc3RyaW5nW10gPSBbXHJcbiAgJ0hUTUw1JyxcclxuICAnQ1NTMycsXHJcbiAgXCJQeXRob25cIixcclxuICBcIkphdmFcIixcclxuICBcIkphdmFTY3JpcHRcIixcclxuICBcIkMrK1wiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiQyNcIixcclxuICBcIkdvXCIsXHJcbiAgXCJSdXN0XCIsXHJcbiAgXCJTd2lmdFwiLFxyXG4gIFwiUEhQXCIsXHJcbiAgXCJLb3RsaW5cIixcclxuICBcIlJcIixcclxuICBcIlNRTFwiLFxyXG4gIFwiQXNzZW1ibHlcIixcclxuICBcIlBlcmxcIixcclxuICBcIlJ1YnlcIixcclxuICBcIlNjYWxhXCIsXHJcbiAgXCJEYXJ0XCIsXHJcbiAgXCJFbGl4aXJcIixcclxuICBcIkVsbVwiLFxyXG4gIFwiQ2xvanVyZVwiLFxyXG4gIFwiSGFza2VsbFwiLFxyXG4gIFwiRGphbmdvXCIsXHJcbiAgXCJMYXJhdmVsXCIsXHJcbiAgXCJTcHJpbmcgQm9vdFwiLFxyXG4gIFwiQW5ndWxhclwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIlZ1ZVwiLFxyXG4gIFwiUmVhY3QgTmF0aXZlXCIsXHJcbiAgXCJGbHV0dGVyXCIsXHJcbiAgXCJVSUtpdFwiLFxyXG4gIFwiQW5kcm9pZCBTREtcIixcclxuICBcIlhhbWFyaW5cIixcclxuICBcIlVuaXR5XCIsXHJcbiAgXCJVbnJlYWwgRW5naW5lXCIsXHJcbiAgXCJOb2RlLmpzXCIsXHJcbiAgXCJFeHByZXNzLmpzXCIsXHJcbiAgXCJOZXN0SlNcIixcclxuICBcIkZsYXNrXCIsXHJcbiAgXCJSdWJ5IG9uIFJhaWxzXCIsXHJcbiAgXCJHcmFpbHNcIixcclxuICBcIlNwcmluZyBNVkNcIixcclxuICBcIkFTUC5ORVQgQ29yZVwiLFxyXG4gIFwiQ2FrZVBIUFwiLFxyXG4gIFwiU3ltZm9ueVwiLFxyXG4gIFwiTGFyYXZlbFwiLFxyXG4gIFwiWWlpXCIsXHJcbiAgXCJaZW5kIEZyYW1ld29ya1wiLFxyXG4gIFwiTWV0ZW9yXCIsXHJcbiAgXCJFbWJlci5qc1wiLFxyXG4gIFwiQmFja2JvbmUuanNcIixcclxuICBcIkV4dEpTXCIsXHJcbiAgJ1F14bqjbiBsw70gUGhpw6puIGLhuqNuOiBHaXQnLFxyXG4gICdNb25nb0RCJyxcclxuICAnTXlzcWwnLFxyXG4gICdTcWwgc2VydmVyJyxcclxuICAnUG9zdGdyZVNRTCcsXHJcbiAgJ1JFU1RmdWwgQVBJcycsXHJcbiAgJ0tp4buDbSB0aOG7rTogSmVzdCwgTW9jaGEsIFNlbGVuaXVtJyxcclxuICAnVHLDrG5oIHF14bqjbiBsw70gROG7sSDDoW4gdsOgIEfDs2kgcGjhuqduIG3hu4FtOiBucG0sIFlhcm4nLFxyXG4gICdCacOqbiBk4buLY2ggdsOgIMSQw7NuZyBnw7NpOiBXZWJwYWNrLCBCYWJlbCcsXHJcbiAgJ0tp4bq/biB0aOG7qWMgduG7gSBBbiB0b8OgbiBUaMO0bmcgdGluJyxcclxuXTtcclxuXHJcbi8vIE3huqNuZyBjw7RuZyBj4bulIGNobyBQaMOhdCB0cmnhu4NuIFBo4bqnbiBt4buBbVxyXG5jb25zdCB0b29sc1NvZnR3YXJlRGV2ZWxvcG1lbnQ6IHN0cmluZ1tdID0gW1xyXG4gICdUcmVsbG8nLFxyXG4gICdKaXJhJyxcclxuICAnU2xhY2snLFxyXG4gICdQb3N0bWFuJyxcclxuICAnRGV2VG9vbHMnLFxyXG4gICdHaXQnLFxyXG4gICdHaXRIdWInLFxyXG4gICdHaXRMYWInLFxyXG4gICdGaWdtYScsXHJcbiAgJ01vbmdvREIgQ29tcGFzcycsXHJcbiAgJ015U1FMIFdvcmtiZW5jaCcsXHJcbiAgJ0JpdGJ1Y2tldCcsXHJcbiAgJ1RyYXZpcyBDSScsXHJcbiAgJ0PDtG5nIGPhu6UgUGjDom4gdMOtY2ggTcOjIG5ndeG7k246IFNvbmFyUXViZScsXHJcbiAgJ1F14bqjbiBsw70gR8OzaSBwaOG6p24gbeG7gW06IG5wbSwgeWFybicsXHJcbl07XHJcblxyXG4vLyBN4bqjbmcga+G7uSBuxINuZyBjaG8gUXXhuqNuIGzDvSBI4buHIHRo4buRbmdcclxuY29uc3Qgc2tpbGxzU3lzdGVtQWRtaW5pc3RyYXRpb246IHN0cmluZ1tdID0gW1xyXG4gICdI4buHIMSRaeG7gXUgaMOgbmg6IExpbnV4IChVYnVudHUsIENlbnRPUyksIFdpbmRvd3MgU2VydmVyJyxcclxuICAnQ8O0bmcgbmdo4buHIMSQw6FtIG3Donk6IEFXUywgQXp1cmUsIEdvb2dsZSBDbG91ZCcsXHJcbiAgJ0RvY2tlciB2w6AgQ29udGFpbmVyczogRG9ja2VyLCBLdWJlcm5ldGVzJyxcclxuICAnQ8O0bmcgY+G7pSBU4buxIMSR4buZbmcgaMOzYSB2w6AgUXXhuqNuIGzDvSBD4bqldSBow6xuaDogQW5zaWJsZSwgUHVwcGV0LCBDaGVmJyxcclxuICAnUXXhuqNuIGzDvSBE4buxIMOhbiB2w6AgxJBp4buBdSBwaOG7kWk6IEFnaWxlLCBTY3J1bScsXHJcbiAgJ0tp4buDbSB0aOG7rSB2w6AgR2nhuqMgbOG6rXAgSOG7hyB0aOG7kW5nOiBTZWxlbml1bSwgSk1ldGVyJyxcclxuICAnT3ZlcnNlZWluZyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbicsXHJcbiAgJ0tp4bq/biB0aOG7qWMgduG7gSBC4bqjbyBt4bqtdCBI4buHIHRo4buRbmcnLFxyXG4gIFwiRGVidWdnZXJcIixcclxuICBcIkxpbnRlcnNcIixcclxuICBcIlZlcnNpb24gQ29udHJvbCBTeXN0ZW1zXCIsXHJcbiAgXCJCdWlsZCBUb29sc1wiLFxyXG4gIFwiQ29udGludW91cyBJbnRlZ3JhdGlvbi9Db250aW51b3VzIERlbGl2ZXJ5IChDSS9DRClcIixcclxuICBcIkNvbnRhaW5lcml6YXRpb25cIixcclxuICBcIlZpcnR1YWxpemF0aW9uXCIsXHJcbiAgXCJDbG91ZCBDb21wdXRpbmdcIixcclxuICBcIkRldk9wc1wiLFxyXG4gIFwiU2VjdXJpdHkgVG9vbHNcIixcclxuICBcIk1hbmFnZW1lbnQgVG9vbHNcIixcclxuICBcIkFuYWx5dGljcyBUb29sc1wiLFxyXG4gIFwiVGVzdGluZyBUb29sc1wiLFxyXG4gIFwiRG9jdW1lbnRhdGlvbiBUb29sc1wiLFxyXG4gIFwiQ29sbGFib3JhdGlvbiBUb29sc1wiLFxyXG4gIFwiUHJvamVjdCBNYW5hZ2VtZW50IFRvb2xzXCIsXHJcbiAgXCJDb21tdW5pY2F0aW9uIFRvb2xzXCIsXHJcbiAgXCJUcmFpbmluZyBUb29sc1wiLFxyXG5dO1xyXG5cclxuLy8gTeG6o25nIGPDtG5nIGPhu6UgY2hvIFF14bqjbiBsw70gSOG7hyB0aOG7kW5nXHJcbmNvbnN0IHRvb2xzU3lzdGVtQWRtaW5pc3RyYXRpb246IHN0cmluZ1tdID0gW1xyXG4gICdDw7RuZyBj4bulIMSQw6FtIG3DonkgdsOgIFF14bqjbiBsw70gSOG6oSB04bqnbmc6IEFXUyBDb25zb2xlLCBBenVyZSBQb3J0YWwsIEdvb2dsZSBDbG91ZCBDb25zb2xlJyxcclxuICAnQ8O0bmcgY+G7pSBU4buxIMSR4buZbmcgaMOzYTogQW5zaWJsZSwgUHVwcGV0LCBDaGVmJyxcclxuICAnQ29udGFpbmVycyB2w6AgT3JjaGVzdHJhdGlvbjogRG9ja2VyLCBLdWJlcm5ldGVzJyxcclxuICAnQ8O0bmcgY+G7pSBHacOhbSBzw6F0IHbDoCBMb2c6IFByb21ldGhldXMsIEdyYWZhbmEsIEVMSyBTdGFjaycsXHJcbiAgJ1F14bqjbiBsw70gUGhpw6puIGLhuqNuIHbDoCBU4buxIMSR4buZbmcgSMOzYTogR2l0LCBKZW5raW5zLCBUcmF2aXMgQ0knLFxyXG4gICdDw7RuZyBj4bulIELhuqNvIG3huq10OiBOZXNzdXMsIFdpcmVzaGFyaywgU2VjdXJpdHkgT25pb24nLFxyXG4gICdDw7RuZyBj4bulIFF14bqjbiBsw70gQ+G6pXUgaMOsbmg6IFRlcnJhZm9ybScsXHJcbiAgJ1Ryw6xuaCBRdeG6o24gbMO9IENvbnRhaW5lcjogS3ViZXJuZXRlcyBEYXNoYm9hcmQnLFxyXG4gIFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHM6IHN0cmluZ1tdID0gW1xyXG4gIC4uLnNraWxsc1NvZnR3YXJlRGV2ZWxvcG1lbnQsXHJcbiAgLi4uc2tpbGxzU3lzdGVtQWRtaW5pc3RyYXRpb25cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b29sczogc3RyaW5nW10gPSBbXHJcbiAgLi4udG9vbHNTb2Z0d2FyZURldmVsb3BtZW50LFxyXG4gIC4uLnRvb2xzU3lzdGVtQWRtaW5pc3RyYXRpb25cclxuXTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2tpbGxzLCB0b29scyB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFDVlwiO1xyXG5cclxuLy8gRGVzY3JpcHRpb24gVUlcclxuY29uc3QgZGVzY3JpcHRvbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0b25JY29uXCIpISBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCBkZXNjcmlwdG9uSWNvblVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdG9uSWNvblVJXCIpISBhcyBIVE1MRGl2RWxlbWVudFxyXG5jb25zdCBkaXNwbGF5RGVzY3JpcHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheURlc2NyaXB0b25cIikhIGFzIEhUTUxEaXZFbGVtZW50XHJcblxyXG5kZXNjcmlwdG9uSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGRpc3BsYXlEZXNjcmlwdG9uLmlubmVySFRNTCA9IGBcclxuICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb2xzPVwiNDVcIlxyXG4gICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICBjbGFzcz1cImRlc2NyaXB0aW9uIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHktMyBweC0zXCI+PC90ZXh0YXJlYT5cclxuICAgIDxpIGlkPVwiYmluRGVzY3JpcHRpb25cIiBvbmNsaWNrPVwiZXZlbnRCaW4ucmVtb3ZlRGVzY3JpcHRpb24oKVwiIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGN1cnNvci1wb2ludGVyXCI+PC9pPlxyXG4gIGBcclxuICBkZXNjcmlwdG9uSWNvblVJLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59KVxyXG4vLyBDb250YWN0IFVJXHJcbmNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxJY29uXCIpISBhcyBIVE1MRWxlbWVudDtcclxuY29uc3QgbGlua2VkaW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rZWRpbkljb25cIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lSWNvblwiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG5jb25zdCBlbWFpbEljb25VSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxJY29uVUlcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBsaW5rZWRpbkljb25VSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua2VkaW5JY29uVUlcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBwaG9uZUljb25VSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVJY29uVUlcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuY29uc3QgZGlzcGxheUVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5RW1haWxcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBkaXNwbGF5TGlua2VkaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImRpc3BsYXlMaW5rZWRpblwiXHJcbikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBkaXNwbGF5UGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlQaG9uZVwiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG5lbWFpbEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5RW1haWwuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0XHJcbiAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgIGNsYXNzPVwiZW1haWwgbWwtMiB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICA8aSBpZD1cImJpbkVtYWlsXCIgb25jbGljaz1cImV2ZW50QmluLnJlbW92ZUVtYWlsKClcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICBgO1xyXG4gIGVtYWlsSWNvblVJLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59KTtcclxuXHJcbmxpbmtlZGluSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGRpc3BsYXlMaW5rZWRpbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXRcclxuICAgIHR5cGU9XCJ1cmxcIlxyXG4gICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgIGNsYXNzPVwibGlua2VkaW4gbWwtMiB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICA8aSBpZD1cImJpbkxpbmtlZGluXCIgb25jbGljaz1cImV2ZW50QmluLnJlbW92ZUxpbmtlZGluKClcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICBgO1xyXG4gIGxpbmtlZGluSWNvblVJLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59KTtcclxuXHJcbnBob25lSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGRpc3BsYXlQaG9uZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXRcclxuICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgIGNsYXNzPVwicGhvbmUgbWwtMiB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZSBhcHBlYXJhbmNlLW5vbmVcIiAvPlxyXG4gICAgPGkgaWQ9XCJiaW5QaG9uZVwiIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVQaG9uZSgpXCIgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gY3Vyc29yLXBvaW50ZXJcIj48L2k+XHJcbiAgYDtcclxuICBwaG9uZUljb25VSS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSk7XHJcblxyXG4vLyBTa2lsbHMgVUlcclxuY29uc3QgZGlzcGxheVNraWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVNraWxsc1wiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbmNvbnN0IHNraWxsc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc0ljb25cIikhIGFzIEhUTUxFbGVtZW50O1xyXG5cclxubGV0IGlTa2lsbElucHV0ID0gMDtcclxuc2tpbGxzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlTa2lsbElucHV0ICs9IDE7XHJcbiAgbGV0IGh0bWxDb250ZW50ID0gYFxyXG4gICAgPGRpdiBpZD1cInNraWxsSW5wdXQke2lTa2lsbElucHV0fVwiIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgY2xhc3M9XCJza2lsbElucHV0IHctWzMwMHB4XSBoLVszMHB4XSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBweC0yIHB5LTMgZm9jdXM6b3V0bGluZS1ub25lIGFwcGVhcmFuY2Utbm9uZVwiIC8+XHJcbiAgICAgIDxpIGlkPVwiYmluU2tpbGwke2lTa2lsbElucHV0fVwiIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVTa2lsbElucHV0KCdza2lsbElucHV0JHtpU2tpbGxJbnB1dH0nKVwiIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGN1cnNvci1wb2ludGVyXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxuICBkaXNwbGF5U2tpbGxzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyAsaHRtbENvbnRlbnQpO1xyXG59KTtcclxuXHJcbi8vIFRvb2wgVUlcclxuY29uc3QgZGlzcGxheVRvb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5VG9vbHNcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCB0b29sc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvb2xzSWNvblwiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbmxldCBpVG9vbElucHV0ID0gMDtcclxudG9vbHNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaVRvb2xJbnB1dCArPTE7XHJcbiAgbGV0IGh0bWxDb250ZW50ID0gYFxyXG4gICAgPGRpdiBpZD1cInRvb2xJbnB1dCR7aVRvb2xJbnB1dH1cIiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgIGNsYXNzPVwidG9vbElucHV0IHctWzMwMHB4XSBoLVszMHB4XSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBweC0yIHB5LTMgZm9jdXM6b3V0bGluZS1ub25lIGFwcGVhcmFuY2Utbm9uZVwiIC8+XHJcbiAgICAgIDxpIGlkPVwiYmluVG9vbCR7aVRvb2xJbnB1dH1cIiBvbmNsaWNrPVwiZXZlbnRCaW4ucmVtb3ZlVG9vbElucHV0KCd0b29sSW5wdXQke2lUb29sSW5wdXR9JylcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxuXHJcbiAgZGlzcGxheVRvb2xzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyAsaHRtbENvbnRlbnQpO1xyXG59KTtcclxuXHJcbmludGVyZmFjZSBTdWdnZXN0ZWREYXRhIHtcclxuICBzdWdnZXN0ZWRTa2lsbHM6IHN0cmluZ1tdO1xyXG4gIHN1Z2dlc3RlZFRvb2xzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuLy8gZmluZCBkYXRhIGZyb20gaW5wdXQgdmFsdWVcclxuZnVuY3Rpb24gc3VnZ2VzdFNraWxsc0FuZFRvb2xzKGlucHV0OiBzdHJpbmcpOiBTdWdnZXN0ZWREYXRhIHtcclxuICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3Qgc3VnZ2VzdGVkU2tpbGxzOiBzdHJpbmdbXSA9IHNraWxscy5maWx0ZXIoKHNraWxsKSA9PlxyXG4gICAgc2tpbGwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dClcclxuICApO1xyXG4gIGNvbnN0IHN1Z2dlc3RlZFRvb2xzOiBzdHJpbmdbXSA9IHRvb2xzLmZpbHRlcigodG9vbCkgPT5cclxuICAgIHRvb2wudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dClcclxuICApO1xyXG5cclxuICAvLyB0cuG6oyB24buBIG3huqNuZyBkYXRhIGThu68gbGnhu4d1IGto4bubcCB24bubaSB2YWx1ZSBj4bunYSBpbnB1dFxyXG4gIHJldHVybiB7XHJcbiAgICBzdWdnZXN0ZWRTa2lsbHM6IHN1Z2dlc3RlZFNraWxscyxcclxuICAgIHN1Z2dlc3RlZFRvb2xzOiBzdWdnZXN0ZWRUb29scyxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTZWxlY3RlZFNraWxsKHNraWxsOiBzdHJpbmcsIGk6IG51bWJlcikge1xyXG4gIC8vIFThuqFvIG3hu5l0IHRo4bq7IHNwYW4gxJHhu4MgaGnhu4NuIHRo4buLIGvhu7kgbsSDbmcgxJHDoyBjaOG7jW5cclxuICAgIGNvbnN0IGh0bWxTcGFuU2tpbGwgPSBgXHJcbiAgICAgIDxkaXYgaWQ9XCJzcGFuU2tpbGwke2l9XCIgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2tpbGxTcGFuIHctWzEwMHB4XVwiPiR7c2tpbGx9PC9zcGFuPlxyXG4gICAgICAgIDxpIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVTa2lsbFNwYW4oJ3NwYW5Ta2lsbCR7aX0nKVwiIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGN1cnNvci1wb2ludGVyXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICAvLyBUaMOqbSBt4buZdCB0aOG6uyBzcGFuIHbDoG8gY29udGFpbmVyIHNraWxsc1xyXG4gICAgZGlzcGxheVNraWxscy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgaHRtbFNwYW5Ta2lsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGVkVG9vbCh0b29sOiBzdHJpbmcsIGk6IG51bWJlcikge1xyXG4gICBjb25zdCBodG1sU3BhblRvb2wgPSBgXHJcbiAgICAgIDxkaXYgaWQ9XCJ0b29sU3BhbiR7aX1cIiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sU3BhbiB3LVsxMDBweF1cIj4ke3Rvb2x9PC9zcGFuPlxyXG4gICAgICAgIDxpIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVUb29sU3BhbigndG9vbFNwYW4ke2l9JylcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgLy8gVGjDqm0gbeG7mXQgdGjhursgc3BhbiB2w6BvIGNvbnRhaW5lciBza2lsbHNcclxuICAgIGRpc3BsYXlUb29scy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgaHRtbFNwYW5Ub29sKTtcclxufVxyXG5cclxubGV0IHByZXZJbnB1dFZhbHVlID0gXCJcIjtcclxubGV0IGlTcGFuU2tpbGw6IG51bWJlciA9IDA7XHJcbmxldCBpU3BhblRvb2w6IG51bWJlciA9IDA7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZSgpIHtcclxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZpZWxkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3Qgc3VnZ2VzdGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Z2dlc3Rpb25MaXN0XCIpO1xyXG5cclxuICBpZiAoaW5wdXRGaWVsZCAmJiBzdWdnZXN0aW9uTGlzdCkge1xyXG4gICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xyXG5cclxuICAgIC8vIEtp4buDbSB0cmEgeGVtIGdpw6EgdHLhu4sgxJHDoyB0aGF5IMSR4buVaSBoYXkgY2jGsGEgPT4ga2jDoWMgcuG7l25nIHRow6wgdGjhu7FjIGhp4buHbiByZW5kZXJcclxuICAgIGlmIChpbnB1dFZhbHVlICE9PSBwcmV2SW5wdXRWYWx1ZSkge1xyXG4gICAgICAvLyBsxrB1IG3huqNuZyBkYXRhIHTDrG0gdGjhuqV5IHbDoG8gc3VnZ2VzdGVkU2tpbGxzIHx8IHN1Z2dlc3RlZFRvb2xzXHJcbiAgICAgIGNvbnN0IHsgc3VnZ2VzdGVkU2tpbGxzLCBzdWdnZXN0ZWRUb29scyB9ID1cclxuICAgICAgICBzdWdnZXN0U2tpbGxzQW5kVG9vbHMoaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgICAvLyBsw6BtIG3hu5tpIGzhuqFpIGRyb3Bkb3duIHVsIGtoaSBpbnB1dCB0aGF5IMSR4buVaVxyXG4gICAgICBzdWdnZXN0aW9uTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgLy8gdGjDqm0gc+G7sSBraeG7h24gY2xpY2sgdsOgbyB04burbmcgdGjhursgbGkgxJHhu4MgY2jhu41uIHNraWxsIG9yIHRvb2xcclxuICAgICAgaWYgKHN1Z2dlc3RlZFNraWxscyAhPT0gbnVsbCkge1xyXG4gICAgICAgIHN1Z2dlc3RlZFNraWxscy5mb3JFYWNoKChzdWdnZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3ItcG9pbnRlclwiLCBcImJvcmRlclwiLCBcImJvZGVyLWItMlwiLCBcInB5LTNcIiwgXCJweC00XCIpO1xyXG4gICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBzdWdnZXN0aW9uO1xyXG4gICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxyXG5cclxuICAgICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlTcGFuU2tpbGwrK1xyXG4gICAgICAgICAgICAvLyByZW5kZXIgZOG7ryBsaeG7h3UgxJHDoyBjaOG7jW4gdsOgbyBjb250YWluZXJcclxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0ZWRTa2lsbChzdWdnZXN0aW9uLCBpU3BhblNraWxsKTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgZHJvcGRvd24gdWwga2hpIMSRw6MgY2jhu41uIDEgb3B0aW9uIGxpXHJcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIHRow6ptIG9wdGlvbiBsaSB2w6BvIHVsIGtoaSBpbnB1dCB0aGF5IMSR4buVaVxyXG4gICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdWdnZXN0ZWRUb29scyAhPT0gbnVsbCkge1xyXG4gICAgICAgIHN1Z2dlc3RlZFRvb2xzLmZvckVhY2goKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImN1cnNvci1wb2ludGVyXCIsIFwiYm9yZGVyXCIgLFwiYm9kZXItYi0yXCIsIFwicHktM1wiLCBcInB4LTRcIik7XHJcbiAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHN1Z2dlc3Rpb247XHJcbiAgICAgICAgICBzdWdnZXN0aW9uTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXHJcblxyXG4gICAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaVNwYW5Ub29sKytcclxuICAgICAgICAgICAgLy8gcmVuZGVyIGThu68gbGnhu4d1IMSRw6MgY2jhu41uIHbDoG8gY29udGFpbmVyXHJcbiAgICAgICAgICAgIHJlbmRlclNlbGVjdGVkVG9vbChzdWdnZXN0aW9uLCBpU3BhblRvb2wpO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBkcm9wZG93biB1bCBraGkgxJHDoyBjaOG7jW4gMSBvcHRpb24gbGlcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gdGjDqm0gb3B0aW9uIGxpIHbDoG8gdWwga2hpIGlucHV0IHRoYXkgxJHhu5VpXHJcbiAgICAgICAgICBzdWdnZXN0aW9uTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNsZWFyIGxpc3Qgb3B0aW9uIGxpIGtoaSBpbnB1dCB0cuG7kW5nXHJcbiAgICAgIHN1Z2dlc3Rpb25MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHN1Z2dlc3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGaWVsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXRDaGFuZ2UpO1xyXG5cclxuXHJcbi8vIEV4cGVyaWVuY2UgVUlcclxuY29uc3QgZXhwZXJpZW5jZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGVyaWVuY2VJY29uXCIpISBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCBkaXNwbGF5RXhwZXJpZW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheUV4cGVyaWVuY2VcIikhIGFzIEhUTUxEaXZFbGVtZW50XHJcbmxldCBpRXhwID0gMDtcclxuZXhwZXJpZW5jZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaUV4cCArPSAxO1xyXG4gIGxldCBodG1sQ29udGVudCA9IGBcclxuICAgIDxkaXYgaWQ9XCJleHBDaGlsZHJlbkRpc3BsYXkke2lFeHB9XCIgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC0zXCI+XHJcbiAgICAgIDxpIGlkPVwiYmluRXhwSWNvbiR7aUV4cH1cIiBvbmNsaWNrPVwiZXZlbnRCaW4ucmVtb3ZlRXhwQ2hpbGRyZW5EaXNwbGF5KCdleHBDaGlsZHJlbkRpc3BsYXkke2lFeHB9JylcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBjdXJzb3ItcG9pbnRlclwiPjwvaT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ3LVsxMTBweF1cIj5Kb2IgcG9zaXRpb248L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgY2xhc3M9XCJqb2JQb3NpdGlvbiB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1bI0Y5RjlGOV1cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ3LVsxMTBweF1cIj5Db21wYW55PC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiY29tcGFueSB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1bI0Y5RjlGOV1cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ3LVsxMTBweF1cIj5TdGFydCBEYXRlPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwic3RhcnREYXRlIHctWzMwMHB4XSBoLVszMHB4XSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBweC0yIHB5LTMgZm9jdXM6b3V0bGluZS1ub25lIGJnLVsjRjlGOUY5XVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8cCBjbGFzcz1cInctWzExMHB4XVwiPkVuZCBEYXRlPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiZW5kRGF0ZSB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1bI0Y5RjlGOV1cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtc3RhcnQgbXQtNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidy1bMTEwcHhdXCI+RGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgbmFtZT1cImV4cERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbHM9XCI2MFwiXHJcbiAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICBjbGFzcz1cImV4cERlc2NyaXB0aW9uIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHktMyBweC0zXCI+PC90ZXh0YXJlYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoLTAuNSB3LWZ1bGwgYmctYmxhY2sgbXktNVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxuICBkaXNwbGF5RXhwZXJpZW5jZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxDb250ZW50KVxyXG59KVxyXG5cclxuY29uc3QgZWR1Y2F0aW9uSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWR1Y2F0aW9uSWNvblwiKSEgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgZGlzcGxheUVkdWNhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5RWR1Y2F0aW9uJykhIGFzIEhUTUxEaXZFbGVtZW50XHJcbmxldCBpRWR1Y2F0aW9uID0gMDtcclxuXHJcbmVkdWNhdGlvbkljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaUVkdWNhdGlvbiArPSAxO1xyXG4gIGxldCBodG1sQ29udGVudCA9IGBcclxuICAgIDxkaXYgaWQ9XCJlZHVDaGlsZHJlbkRpc3BsYXkke2lFZHVjYXRpb259XCIgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC00IG10LTVcIj5cclxuICAgIDxpIGlkPVwiYmluRWR1JHtpRWR1Y2F0aW9ufVwiIG9uY2xpY2s9XCJldmVudEJpbi5yZW1vdmVFZHVDaGlsZHJlbkRpc3BsYXkoJ2VkdUNoaWxkcmVuRGlzcGxheSR7aUVkdWNhdGlvbn0nKVwiIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGN1cnNvci1wb2ludGVyXCI+PC9pPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8cCBjbGFzcz1cInctWzEzMHB4XVwiPk1ham9yPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwibWFqb3Igdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmUgYmctWyNGOUY5RjldXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidy1bMTMwcHhdXCI+RGVncmVlPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiZGVncmVlIHctWzMwMHB4XSBoLVszMHB4XSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBweC0yIHB5LTMgZm9jdXM6b3V0bGluZS1ub25lIGJnLVsjRjlGOUY5XVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8cCBjbGFzcz1cInctWzEzMHB4XVwiPlNjaG9vbDwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICBjbGFzcz1cInNjaG9vbCB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyLWItMiBib3JkZXItYmxhY2sgcHgtMiBweS0zIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1bI0Y5RjlGOV1cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+R3JhZHVhdGlvbiBZZWFyPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiZ3JhZHVhdGlvblllYXIgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHB4LTIgcHktMyBmb2N1czpvdXRsaW5lLW5vbmUgYmctWyNGOUY5RjldXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcblxyXG4gIGRpc3BsYXlFZHVjYXRpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sQ29udGVudClcclxufSlcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIGV2ZW50QmluOiB7XHJcbiAgICAgIHJlbW92ZURlc2NyaXB0aW9uOiAoKSA9PiB2b2lkO1xyXG4gICAgICByZW1vdmVFbWFpbDogKCkgPT4gdm9pZDtcclxuICAgICAgcmVtb3ZlTGlua2VkaW46ICgpID0+IHZvaWQ7XHJcbiAgICAgIHJlbW92ZVBob25lOiAoKSA9PiB2b2lkO1xyXG4gICAgICByZW1vdmVTa2lsbElucHV0OiAoaWRTa2lsbElucHV0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICAgIHJlbW92ZVRvb2xJbnB1dDogKGlkVG9vbElucHV0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICAgIHJlbW92ZVNraWxsU3BhbjogKGlkU2tpbGxDaGlsZHJlbkRpdjogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgICByZW1vdmVUb29sU3BhbjogKGlkVG9vbENoaWxkcmVuRGl2OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICAgIHJlbW92ZUV4cENoaWxkcmVuRGlzcGxheTogKGlkRXhwQ2hpbGRyZW5EaXNwbGF5OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICAgIHJlbW92ZUVkdUNoaWxkcmVuRGlzcGxheTogKGlkRWR1Q2hpbGRyZW5EaXNwbGF5OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmV2ZW50QmluID0ge1xyXG4gIHJlbW92ZURlc2NyaXB0aW9uOiAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW5EZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG4gICAgZGVzY3JpcHRvbkljb25VSS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gIH0sXHJcbiAgcmVtb3ZlRW1haWw6ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbCcpLnJlbW92ZSgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpbkVtYWlsJykucmVtb3ZlKCk7XHJcbiAgICBlbWFpbEljb25VSS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICB9LFxyXG4gIHJlbW92ZUxpbmtlZGluOiAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua2VkaW4nKS5yZW1vdmUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW5MaW5rZWRpbicpLnJlbW92ZSgpO1xyXG4gICAgbGlua2VkaW5JY29uVUkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSxcclxuICByZW1vdmVQaG9uZTogKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob25lJykucmVtb3ZlKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmluUGhvbmUnKS5yZW1vdmUoKTtcclxuICAgIHBob25lSWNvblVJLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgfSxcclxuICByZW1vdmVTa2lsbElucHV0OiAoaWRTa2lsbElucHV0OiBzdHJpbmcpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkU2tpbGxJbnB1dCkucmVtb3ZlKCk7XHJcbiAgfSxcclxuICByZW1vdmVUb29sSW5wdXQ6IChpZFRvb2xJbnB1dDogc3RyaW5nKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFRvb2xJbnB1dCkucmVtb3ZlKCk7XHJcbiAgfSxcclxuICByZW1vdmVTa2lsbFNwYW46IChpZERpdjogc3RyaW5nKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZERpdikucmVtb3ZlKCk7XHJcbiAgfSxcclxuICByZW1vdmVUb29sU3BhbjogKGlkRGl2OiBzdHJpbmcpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRGl2KS5yZW1vdmUoKTtcclxuICB9LFxyXG4gIHJlbW92ZUV4cENoaWxkcmVuRGlzcGxheTogKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5yZW1vdmUoKTtcclxuICB9LFxyXG4gIHJlbW92ZUVkdUNoaWxkcmVuRGlzcGxheTogKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5yZW1vdmUoKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==