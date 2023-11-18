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
/*!**********************************************************!*\
  !*** ./src/controllers/cvController/postCvController.ts ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_dataCV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/dataCV */ "./src/data/dataCV.ts");

// Job UI
var jobIcon = document.getElementById("jobIcon");
var displayJob = document.getElementById("displayJob");
jobIcon.addEventListener("click", function () {
    displayJob.innerHTML = "\n    <input\n    id=\"inputJob\"\n    class=\"w-[300px] h-[30px] border px-2 py-3\"\n    type=\"text\"\n    spellcheck=\"false\" />\n  ";
    jobIcon.remove();
});
// Contact UI
var emailIcon = document.getElementById("emailIcon");
var linkedinIcon = document.getElementById("linkedinIcon");
var phoneIcon = document.getElementById("phoneIcon");
var displayEmail = document.getElementById("displayEmail");
var displayLinkedin = document.getElementById("displayLinkedin");
var displayPhone = document.getElementById("displayPhone");
emailIcon.addEventListener("click", function () {
    displayEmail.innerHTML = "\n    <input\n    type=\"text\"\n    class=\"ml-2 w-[300px] h-[30px] border px-2 py-3\" />\n  ";
    emailIcon.remove();
});
linkedinIcon.addEventListener("click", function () {
    displayLinkedin.innerHTML = "\n    <input\n    type=\"text\"\n    class=\"ml-2 w-[300px] h-[30px] border px-2 py-3\" />\n  ";
    linkedinIcon.remove();
});
phoneIcon.addEventListener("click", function () {
    displayPhone.innerHTML = "\n    <input\n    type=\"text\"\n    class=\"ml-2 w-[300px] h-[30px] border px-2 py-3\" />\n  ";
    phoneIcon.remove();
});
// Skills UI
var displaySkills = document.getElementById("displaySkills");
var skillsIcon = document.getElementById("skillsIcon");
skillsIcon.addEventListener("click", function () {
    var newListItem = document.createElement("li");
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.classList.add("w-[300px]", "h-[30px]", "border", "px-2", "py-3");
    newListItem.appendChild(newInput);
    displaySkills.appendChild(newListItem);
});
// Tool UI
var displayTools = document.getElementById("displayTools");
var toolsIcon = document.getElementById("toolsIcon");
toolsIcon.addEventListener("click", function () {
    var newListItem = document.createElement("li");
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.classList.add("w-[300px]", "h-[30px]", "border", "px-2", "py-3");
    newListItem.appendChild(newInput);
    displayTools.appendChild(newListItem);
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
    selectedSkillTag.textContent = skill;
    // Thêm một thẻ span vào container skills
    displaySkills.appendChild(selectedSkillTag);
}
function renderSelectedTool(tool) {
    // Tạo một thẻ span để hiển thị kỹ năng đã chọn
    var selectedToolTag = document.createElement("span");
    selectedToolTag.textContent = tool;
    // Thêm một thẻ span vào container tools
    displayTools.appendChild(selectedToolTag);
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
                    listItem.addEventListener("click", function () {
                        // render dữ liệu đã chọn vào container
                        renderSelectedSkill(suggestion);
                        // clear dropdown ul khi đã chọn 1 option li
                        suggestionList.innerHTML = "";
                        inputField.value = "";
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
                    listItem.addEventListener("click", function () {
                        // render dữ liệu đã chọn vào container
                        renderSelectedTool(suggestion);
                        // clear dropdown ul khi đã chọn 1 option li
                        suggestionList.innerHTML = "";
                        inputField.value = "";
                    });
                    // thêm option li vào ul khi input thay đổi
                    suggestionList.appendChild(listItem);
                });
            }
        }
        else {
            // clear list option li khi input trống
            suggestionList.innerHTML = "";
        }
    }
}
document
    .getElementById("inputField")
    .addEventListener("input", handleInputChange);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQztvQkFFSCwyQ0FBMkM7b0JBQzNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsdUNBQXVDO1lBQ3ZDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQy9CO0tBQ0Y7QUFDSCxDQUFDO0FBRUQsUUFBUTtLQUNMLGNBQWMsQ0FBQyxZQUFZLENBQUM7S0FDNUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay8uL3NyYy9kYXRhL2RhdGFDVi50cyIsIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZS1iYXNlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrLy4vc3JjL2NvbnRyb2xsZXJzL2N2Q29udHJvbGxlci9wb3N0Q3ZDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE3huqNuZyBr4bu5IG7Eg25nIGNobyBQaMOhdCB0cmnhu4NuIFBo4bqnbiBt4buBbVxyXG5jb25zdCBza2lsbHNTb2Z0d2FyZURldmVsb3BtZW50OiBzdHJpbmdbXSA9IFtcclxuICAnSFRNTDUnLFxyXG4gICdDU1MzJyxcclxuICAnSmF2YXNjcmlwdCcsXHJcbiAgJ1R5cGVzY3JpcHQnLFxyXG4gICdSZWFjdCcsXHJcbiAgJ0FuZ3VsYXInLFxyXG4gICdWdWVqcycsXHJcbiAgJ051eHRqcycsXHJcbiAgJ05lc3RqcycsXHJcbiAgJ1F14bqjbiBsw70gUGhpw6puIGLhuqNuOiBHaXQnLFxyXG4gICdNb25nb0RCJyxcclxuICAnTXlzcWwnLFxyXG4gICdTcWwgc2VydmVyJyxcclxuICAnUG9zdGdyZVNRTCcsXHJcbiAgJ1JFU1RmdWwgQVBJcycsXHJcbiAgJ0tp4buDbSB0aOG7rTogSmVzdCwgTW9jaGEsIFNlbGVuaXVtJyxcclxuICAnVHLDrG5oIHF14bqjbiBsw70gROG7sSDDoW4gdsOgIEfDs2kgcGjhuqduIG3hu4FtOiBucG0sIFlhcm4nLFxyXG4gICdCacOqbiBk4buLY2ggdsOgIMSQw7NuZyBnw7NpOiBXZWJwYWNrLCBCYWJlbCcsXHJcbiAgJ0tp4bq/biB0aOG7qWMgduG7gSBBbiB0b8OgbiBUaMO0bmcgdGluJyxcclxuXTtcclxuXHJcbi8vIE3huqNuZyBjw7RuZyBj4bulIGNobyBQaMOhdCB0cmnhu4NuIFBo4bqnbiBt4buBbVxyXG5jb25zdCB0b29sc1NvZnR3YXJlRGV2ZWxvcG1lbnQ6IHN0cmluZ1tdID0gW1xyXG4gICdUcmVsbG8nLFxyXG4gICdKaXJhJyxcclxuICAnU2xhY2snLFxyXG4gICdQb3N0bWFuJyxcclxuICAnRGV2VG9vbHMnLFxyXG4gICdHaXQnLFxyXG4gICdHaXRIdWInLFxyXG4gICdHaXRMYWInLFxyXG4gICdGaWdtYScsXHJcbiAgJ01vbmdvREIgQ29tcGFzcycsXHJcbiAgJ015U1FMIFdvcmtiZW5jaCcsXHJcbiAgJ0JpdGJ1Y2tldCcsXHJcbiAgJ1RyYXZpcyBDSScsXHJcbiAgJ0PDtG5nIGPhu6UgUGjDom4gdMOtY2ggTcOjIG5ndeG7k246IFNvbmFyUXViZScsXHJcbiAgJ1F14bqjbiBsw70gR8OzaSBwaOG6p24gbeG7gW06IG5wbSwgeWFybicsXHJcbl07XHJcblxyXG4vLyBN4bqjbmcga+G7uSBuxINuZyBjaG8gUXXhuqNuIGzDvSBI4buHIHRo4buRbmdcclxuY29uc3Qgc2tpbGxzU3lzdGVtQWRtaW5pc3RyYXRpb246IHN0cmluZ1tdID0gW1xyXG4gICdI4buHIMSRaeG7gXUgaMOgbmg6IExpbnV4IChVYnVudHUsIENlbnRPUyksIFdpbmRvd3MgU2VydmVyJyxcclxuICAnQ8O0bmcgbmdo4buHIMSQw6FtIG3Donk6IEFXUywgQXp1cmUsIEdvb2dsZSBDbG91ZCcsXHJcbiAgJ0RvY2tlciB2w6AgQ29udGFpbmVyczogRG9ja2VyLCBLdWJlcm5ldGVzJyxcclxuICAnQ8O0bmcgY+G7pSBU4buxIMSR4buZbmcgaMOzYSB2w6AgUXXhuqNuIGzDvSBD4bqldSBow6xuaDogQW5zaWJsZSwgUHVwcGV0LCBDaGVmJyxcclxuICAnUXXhuqNuIGzDvSBE4buxIMOhbiB2w6AgxJBp4buBdSBwaOG7kWk6IEFnaWxlLCBTY3J1bScsXHJcbiAgJ0tp4buDbSB0aOG7rSB2w6AgR2nhuqMgbOG6rXAgSOG7hyB0aOG7kW5nOiBTZWxlbml1bSwgSk1ldGVyJyxcclxuICAnT3ZlcnNlZWluZyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbicsXHJcbiAgJ0tp4bq/biB0aOG7qWMgduG7gSBC4bqjbyBt4bqtdCBI4buHIHRo4buRbmcnLFxyXG5dO1xyXG5cclxuLy8gTeG6o25nIGPDtG5nIGPhu6UgY2hvIFF14bqjbiBsw70gSOG7hyB0aOG7kW5nXHJcbmNvbnN0IHRvb2xzU3lzdGVtQWRtaW5pc3RyYXRpb246IHN0cmluZ1tdID0gW1xyXG4gICdDw7RuZyBj4bulIMSQw6FtIG3DonkgdsOgIFF14bqjbiBsw70gSOG6oSB04bqnbmc6IEFXUyBDb25zb2xlLCBBenVyZSBQb3J0YWwsIEdvb2dsZSBDbG91ZCBDb25zb2xlJyxcclxuICAnQ8O0bmcgY+G7pSBU4buxIMSR4buZbmcgaMOzYTogQW5zaWJsZSwgUHVwcGV0LCBDaGVmJyxcclxuICAnQ29udGFpbmVycyB2w6AgT3JjaGVzdHJhdGlvbjogRG9ja2VyLCBLdWJlcm5ldGVzJyxcclxuICAnQ8O0bmcgY+G7pSBHacOhbSBzw6F0IHbDoCBMb2c6IFByb21ldGhldXMsIEdyYWZhbmEsIEVMSyBTdGFjaycsXHJcbiAgJ1F14bqjbiBsw70gUGhpw6puIGLhuqNuIHbDoCBU4buxIMSR4buZbmcgSMOzYTogR2l0LCBKZW5raW5zLCBUcmF2aXMgQ0knLFxyXG4gICdDw7RuZyBj4bulIELhuqNvIG3huq10OiBOZXNzdXMsIFdpcmVzaGFyaywgU2VjdXJpdHkgT25pb24nLFxyXG4gICdDw7RuZyBj4bulIFF14bqjbiBsw70gQ+G6pXUgaMOsbmg6IFRlcnJhZm9ybScsXHJcbiAgJ1Ryw6xuaCBRdeG6o24gbMO9IENvbnRhaW5lcjogS3ViZXJuZXRlcyBEYXNoYm9hcmQnLFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHM6IHN0cmluZ1tdID0gW1xyXG4gIC4uLnNraWxsc1NvZnR3YXJlRGV2ZWxvcG1lbnQsXHJcbiAgLi4uc2tpbGxzU3lzdGVtQWRtaW5pc3RyYXRpb25cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b29sczogc3RyaW5nW10gPSBbXHJcbiAgLi4udG9vbHNTb2Z0d2FyZURldmVsb3BtZW50LFxyXG4gIC4uLnRvb2xzU3lzdGVtQWRtaW5pc3RyYXRpb25cclxuXTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2tpbGxzLCB0b29scyB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFDVlwiO1xyXG5cclxuLy8gSm9iIFVJXHJcbmNvbnN0IGpvYkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvYkljb25cIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBkaXNwbGF5Sm9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5Sm9iXCIpISBhcyBIVE1MRWxlbWVudDtcclxuXHJcbmpvYkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5Sm9iLmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dFxyXG4gICAgaWQ9XCJpbnB1dEpvYlwiXHJcbiAgICBjbGFzcz1cInctWzMwMHB4XSBoLVszMHB4XSBib3JkZXIgcHgtMiBweS0zXCJcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiIC8+XHJcbiAgYDtcclxuICBqb2JJY29uLnJlbW92ZSgpO1xyXG59KTtcclxuXHJcbi8vIENvbnRhY3QgVUlcclxuY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbEljb25cIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBsaW5rZWRpbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtlZGluSWNvblwiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbmNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVJY29uXCIpISBhcyBIVE1MRWxlbWVudDtcclxuXHJcbmNvbnN0IGRpc3BsYXlFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheUVtYWlsXCIpISBhcyBIVE1MRWxlbWVudDtcclxuY29uc3QgZGlzcGxheUxpbmtlZGluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJkaXNwbGF5TGlua2VkaW5cIlxyXG4pISBhcyBIVE1MRWxlbWVudDtcclxuY29uc3QgZGlzcGxheVBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5UGhvbmVcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuZW1haWxJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZGlzcGxheUVtYWlsLmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dFxyXG4gICAgdHlwZT1cInRleHRcIlxyXG4gICAgY2xhc3M9XCJtbC0yIHctWzMwMHB4XSBoLVszMHB4XSBib3JkZXIgcHgtMiBweS0zXCIgLz5cclxuICBgO1xyXG4gIGVtYWlsSWNvbi5yZW1vdmUoKTtcclxufSk7XHJcblxyXG5saW5rZWRpbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5TGlua2VkaW4uaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0XHJcbiAgICB0eXBlPVwidGV4dFwiXHJcbiAgICBjbGFzcz1cIm1sLTIgdy1bMzAwcHhdIGgtWzMwcHhdIGJvcmRlciBweC0yIHB5LTNcIiAvPlxyXG4gIGA7XHJcbiAgbGlua2VkaW5JY29uLnJlbW92ZSgpO1xyXG59KTtcclxuXHJcbnBob25lSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGRpc3BsYXlQaG9uZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXRcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIGNsYXNzPVwibWwtMiB3LVszMDBweF0gaC1bMzBweF0gYm9yZGVyIHB4LTIgcHktM1wiIC8+XHJcbiAgYDtcclxuICBwaG9uZUljb24ucmVtb3ZlKCk7XHJcbn0pO1xyXG5cclxuLy8gU2tpbGxzIFVJXHJcbmNvbnN0IGRpc3BsYXlTa2lsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlTa2lsbHNcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBza2lsbHNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHNJY29uXCIpISBhcyBIVE1MRWxlbWVudDtcclxuXHJcbnNraWxsc0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbmV3SW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5ld0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ3LVszMDBweF1cIiwgXCJoLVszMHB4XVwiLCBcImJvcmRlclwiLCBcInB4LTJcIiwgXCJweS0zXCIpO1xyXG5cclxuICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XHJcblxyXG4gIGRpc3BsYXlTa2lsbHMuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pO1xyXG59KTtcclxuXHJcbi8vIFRvb2wgVUlcclxuY29uc3QgZGlzcGxheVRvb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5VG9vbHNcIikhIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCB0b29sc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvb2xzSWNvblwiKSEgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG50b29sc0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbmV3SW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5ld0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ3LVszMDBweF1cIiwgXCJoLVszMHB4XVwiLCBcImJvcmRlclwiLCBcInB4LTJcIiwgXCJweS0zXCIpO1xyXG5cclxuICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XHJcblxyXG4gIGRpc3BsYXlUb29scy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFN1Z2dlc3RlZERhdGEge1xyXG4gIHN1Z2dlc3RlZFNraWxsczogc3RyaW5nW107XHJcbiAgc3VnZ2VzdGVkVG9vbHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vLyBmaW5kIGRhdGEgZnJvbSBpbnB1dCB2YWx1ZVxyXG5mdW5jdGlvbiBzdWdnZXN0U2tpbGxzQW5kVG9vbHMoaW5wdXQ6IHN0cmluZyk6IFN1Z2dlc3RlZERhdGEge1xyXG4gIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBzdWdnZXN0ZWRTa2lsbHM6IHN0cmluZ1tdID0gc2tpbGxzLmZpbHRlcigoc2tpbGwpID0+XHJcbiAgICBza2lsbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0KVxyXG4gICk7XHJcbiAgY29uc3Qgc3VnZ2VzdGVkVG9vbHM6IHN0cmluZ1tdID0gdG9vbHMuZmlsdGVyKCh0b29sKSA9PlxyXG4gICAgdG9vbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0KVxyXG4gICk7XHJcblxyXG4gIC8vIHRy4bqjIHbhu4EgbeG6o25nIGRhdGEgZOG7ryBsaeG7h3Uga2jhu5twIHbhu5tpIHZhbHVlIGPhu6dhIGlucHV0XHJcbiAgcmV0dXJuIHtcclxuICAgIHN1Z2dlc3RlZFNraWxsczogc3VnZ2VzdGVkU2tpbGxzLFxyXG4gICAgc3VnZ2VzdGVkVG9vbHM6IHN1Z2dlc3RlZFRvb2xzLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGVkU2tpbGwoc2tpbGw6IHN0cmluZykge1xyXG4gIC8vIFThuqFvIG3hu5l0IHRo4bq7IHNwYW4gxJHhu4MgaGnhu4NuIHRo4buLIGvhu7kgbsSDbmcgxJHDoyBjaOG7jW5cclxuICAgIGNvbnN0IHNlbGVjdGVkU2tpbGxUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNlbGVjdGVkU2tpbGxUYWcudGV4dENvbnRlbnQgPSBza2lsbDtcclxuXHJcbiAgICAvLyBUaMOqbSBt4buZdCB0aOG6uyBzcGFuIHbDoG8gY29udGFpbmVyIHNraWxsc1xyXG4gICAgZGlzcGxheVNraWxscy5hcHBlbmRDaGlsZChzZWxlY3RlZFNraWxsVGFnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU2VsZWN0ZWRUb29sKHRvb2w6IHN0cmluZykge1xyXG4gIC8vIFThuqFvIG3hu5l0IHRo4bq7IHNwYW4gxJHhu4MgaGnhu4NuIHRo4buLIGvhu7kgbsSDbmcgxJHDoyBjaOG7jW5cclxuICAgIGNvbnN0IHNlbGVjdGVkVG9vbFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc2VsZWN0ZWRUb29sVGFnLnRleHRDb250ZW50ID0gdG9vbDtcclxuXHJcbiAgICAvLyBUaMOqbSBt4buZdCB0aOG6uyBzcGFuIHbDoG8gY29udGFpbmVyIHRvb2xzXHJcbiAgICBkaXNwbGF5VG9vbHMuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb29sVGFnKTtcclxufVxyXG5cclxubGV0IHByZXZJbnB1dFZhbHVlID0gXCJcIjtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKCkge1xyXG4gIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RmllbGRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdCBzdWdnZXN0aW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VnZ2VzdGlvbkxpc3RcIik7XHJcblxyXG4gIGlmIChpbnB1dEZpZWxkICYmIHN1Z2dlc3Rpb25MaXN0KSB7XHJcbiAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcblxyXG4gICAgLy8gS2nhu4NtIHRyYSB4ZW0gZ2nDoSB0cuG7iyDEkcOjIHRoYXkgxJHhu5VpIGhheSBjaMawYSA9PiBraMOhYyBy4buXbmcgdGjDrCB0aOG7sWMgaGnhu4duIHJlbmRlclxyXG4gICAgaWYgKGlucHV0VmFsdWUgIT09IHByZXZJbnB1dFZhbHVlKSB7XHJcbiAgICAgIC8vIGzGsHUgbeG6o25nIGRhdGEgdMOsbSB0aOG6pXkgdsOgbyBzdWdnZXN0ZWRTa2lsbHMgfHwgc3VnZ2VzdGVkVG9vbHNcclxuICAgICAgY29uc3QgeyBzdWdnZXN0ZWRTa2lsbHMsIHN1Z2dlc3RlZFRvb2xzIH0gPVxyXG4gICAgICAgIHN1Z2dlc3RTa2lsbHNBbmRUb29scyhpbnB1dFZhbHVlKTtcclxuXHJcbiAgICAgIC8vIGzDoG0gbeG7m2kgbOG6oWkgZHJvcGRvd24gdWwga2hpIGlucHV0IHRoYXkgxJHhu5VpXHJcbiAgICAgIHN1Z2dlc3Rpb25MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAvLyB0aMOqbSBz4buxIGtp4buHbiBjbGljayB2w6BvIHThu6tuZyB0aOG6uyBsaSDEkeG7gyBjaOG7jW4gc2tpbGwgb3IgdG9vbFxyXG4gICAgICBpZiAoc3VnZ2VzdGVkU2tpbGxzICE9PSBudWxsKSB7XHJcbiAgICAgICAgc3VnZ2VzdGVkU2tpbGxzLmZvckVhY2goKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImN1cnNvci1wb2ludGVyXCIsIFwiYm9yZGVyXCIsIFwiYm9kZXItYi0yXCIsIFwicHktM1wiLCBcInB4LTRcIik7XHJcbiAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHN1Z2dlc3Rpb247XHJcblxyXG4gICAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmVuZGVyIGThu68gbGnhu4d1IMSRw6MgY2jhu41uIHbDoG8gY29udGFpbmVyXHJcbiAgICAgICAgICAgIHJlbmRlclNlbGVjdGVkU2tpbGwoc3VnZ2VzdGlvbik7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGRyb3Bkb3duIHVsIGtoaSDEkcOjIGNo4buNbiAxIG9wdGlvbiBsaVxyXG4gICAgICAgICAgICBzdWdnZXN0aW9uTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gdGjDqm0gb3B0aW9uIGxpIHbDoG8gdWwga2hpIGlucHV0IHRoYXkgxJHhu5VpXHJcbiAgICAgICAgICBzdWdnZXN0aW9uTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1Z2dlc3RlZFRvb2xzICE9PSBudWxsKSB7XHJcbiAgICAgICAgc3VnZ2VzdGVkVG9vbHMuZm9yRWFjaCgoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLXBvaW50ZXJcIiwgXCJib3JkZXJcIiAsXCJib2Rlci1iLTJcIiwgXCJweS0zXCIsIFwicHgtNFwiKTtcclxuICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gc3VnZ2VzdGlvbjtcclxuXHJcbiAgICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZW5kZXIgZOG7ryBsaeG7h3UgxJHDoyBjaOG7jW4gdsOgbyBjb250YWluZXJcclxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0ZWRUb29sKHN1Z2dlc3Rpb24pO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBkcm9wZG93biB1bCBraGkgxJHDoyBjaOG7jW4gMSBvcHRpb24gbGlcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIHRow6ptIG9wdGlvbiBsaSB2w6BvIHVsIGtoaSBpbnB1dCB0aGF5IMSR4buVaVxyXG4gICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjbGVhciBsaXN0IG9wdGlvbiBsaSBraGkgaW5wdXQgdHLhu5FuZ1xyXG4gICAgICBzdWdnZXN0aW9uTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnRcclxuICAuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZpZWxkXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBoYW5kbGVJbnB1dENoYW5nZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==