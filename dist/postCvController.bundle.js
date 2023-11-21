/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!**********************************************************!*\
  !*** ./src/controllers/cvController/postCvController.ts ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
document.getElementById('btnCreateCV').addEventListener('click', function () {
    // Info
    var fullname = document.querySelector('.fullname');
    var workPosition = document.querySelector('.workPosition');
    var description = document.querySelector('.description');
    // Contact
    var email = document.querySelector('.email');
    var linkedin = document.querySelector('.linkedin');
    var phone = document.querySelector('.phone');
    // Skills & Tools
    var skillInputs = document.querySelectorAll('.skillInput');
    var skillValues = Array.from(skillInputs).map(function (input) { return input.value; });
    var toolInputs = document.querySelectorAll('.toolInput');
    var toolValues = Array.from(toolInputs).map(function (input) { return input.value; });
    // Experience
    var jobPositions = document.querySelectorAll('.jobPosition');
    var jobPositionValues = Array.from(jobPositions).map(function (job) { return job.value; });
    var companies = document.querySelectorAll('.company');
    var companyValues = Array.from(companies).map(function (company) { return company.value; });
    var startDates = document.querySelectorAll('.startDate');
    var startDateValues = Array.from(startDates).map(function (startDate) { return startDate.value; });
    var endDates = document.querySelectorAll('.endDate');
    var endDateValues = Array.from(endDates).map(function (endDate) { return endDate.value; });
    var expDescriptions = document.querySelectorAll('.expDescription');
    var expDescriptionValues = Array.from(expDescriptions).map(function (expDescription) { return expDescription.value; });
    // tính xem có bao nhiều exp rồi duyệt vòng for lưu vào mảng
    var numberOfSections = expDescriptions.length;
    var listExp = [];
    for (var i = 0; i < numberOfSections; i++) {
        listExp.push({
            title: jobPositionValues[i],
            company: companyValues[i],
            startDate: startDateValues[i],
            endDate: endDateValues[i],
            description: expDescriptionValues[i]
        });
    }
    console.log(listExp);
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEgsNERBQTREO0lBQzVELElBQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLE1BQU07SUFDL0MsSUFBTSxPQUFPLEdBQWlCLEVBQUU7SUFDaEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQ1Y7WUFDRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7U0FDckMsQ0FDRjtLQUNGO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlLWJhc2Utd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGUtYmFzZS13ZWJwYWNrLy4vc3JjL2NvbnRyb2xsZXJzL2N2Q29udHJvbGxlci9wb3N0Q3ZDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBFeHBlcmllbmNlIH0gZnJvbSBcIi4uLy4uL2VudGl0eS91c2VyXCJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkNyZWF0ZUNWJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgLy8gSW5mb1xyXG4gIGNvbnN0IGZ1bGxuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bGxuYW1lJykhIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICBjb25zdCB3b3JrUG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya1Bvc2l0aW9uJykhIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICBjb25zdCBkZXNjcmlwdGlvbjogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50XHJcblxyXG4gIC8vIENvbnRhY3RcclxuICBjb25zdCBlbWFpbDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGNvbnN0IGxpbmtlZGluOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rZWRpbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3QgcGhvbmU6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob25lJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgLy8gU2tpbGxzICYgVG9vbHNcclxuICBjb25zdCBza2lsbElucHV0czogTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PiB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGxJbnB1dCcpO1xyXG4gIGNvbnN0IHNraWxsVmFsdWVzOiBzdHJpbmdbXSB8IG51bGwgPSBBcnJheS5mcm9tKHNraWxsSW5wdXRzKS5tYXAoKGlucHV0KSA9PiBpbnB1dC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IHRvb2xJbnB1dHM6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD4gfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2xJbnB1dCcpO1xyXG4gIGNvbnN0IHRvb2xWYWx1ZXM6IHN0cmluZ1tdIHwgbnVsbCA9IEFycmF5LmZyb20odG9vbElucHV0cykubWFwKChpbnB1dCkgPT4gaW5wdXQudmFsdWUpO1xyXG5cclxuICAvLyBFeHBlcmllbmNlXHJcbiAgY29uc3Qgam9iUG9zaXRpb25zOiBcclxuICAgIE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD4gfCBudWxsIFxyXG4gICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuam9iUG9zaXRpb24nKVxyXG4gIGNvbnN0IGpvYlBvc2l0aW9uVmFsdWVzOiBzdHJpbmdbXSB8IG51bGwgPSBBcnJheS5mcm9tKGpvYlBvc2l0aW9ucykubWFwKChqb2IpID0+IGpvYi52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGNvbXBhbmllczogXHJcbiAgICBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+IHwgbnVsbCBcclxuICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhbnknKVxyXG4gIGNvbnN0IGNvbXBhbnlWYWx1ZXM6IHN0cmluZ1tdIHwgbnVsbCA9IEFycmF5LmZyb20oY29tcGFuaWVzKS5tYXAoKGNvbXBhbnkpID0+IGNvbXBhbnkudmFsdWUpO1xyXG5cclxuICBjb25zdCBzdGFydERhdGVzOiBcclxuICAgIE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD4gfCBudWxsIFxyXG4gICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcnREYXRlJylcclxuICBjb25zdCBzdGFydERhdGVWYWx1ZXM6IHN0cmluZ1tdIHwgbnVsbCA9IEFycmF5LmZyb20oc3RhcnREYXRlcykubWFwKChzdGFydERhdGUpID0+IHN0YXJ0RGF0ZS52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGVuZERhdGVzOiBcclxuICAgIE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD4gfCBudWxsXHJcbiAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmREYXRlJylcclxuICBjb25zdCBlbmREYXRlVmFsdWVzOiBzdHJpbmdbXSB8IG51bGwgPSBBcnJheS5mcm9tKGVuZERhdGVzKS5tYXAoKGVuZERhdGUpID0+IGVuZERhdGUudmFsdWUpO1xyXG5cclxuICBjb25zdCBleHBEZXNjcmlwdGlvbnM6IFxyXG4gICAgTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PiB8IG51bGwgXHJcbiAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBEZXNjcmlwdGlvbicpXHJcbiAgY29uc3QgZXhwRGVzY3JpcHRpb25WYWx1ZXM6IHN0cmluZ1tdIHwgbnVsbCA9IEFycmF5LmZyb20oZXhwRGVzY3JpcHRpb25zKS5tYXAoKGV4cERlc2NyaXB0aW9uKSA9PiBleHBEZXNjcmlwdGlvbi52YWx1ZSk7XHJcblxyXG4gIC8vIHTDrW5oIHhlbSBjw7MgYmFvIG5oaeG7gXUgZXhwIHLhu5NpIGR1eeG7h3QgdsOybmcgZm9yIGzGsHUgdsOgbyBt4bqjbmdcclxuICBjb25zdCBudW1iZXJPZlNlY3Rpb25zID0gZXhwRGVzY3JpcHRpb25zLmxlbmd0aFxyXG4gIGNvbnN0IGxpc3RFeHA6IEV4cGVyaWVuY2VbXSA9IFtdXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IG51bWJlck9mU2VjdGlvbnM7IGkrKykge1xyXG4gICAgbGlzdEV4cC5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IGpvYlBvc2l0aW9uVmFsdWVzW2ldLFxyXG4gICAgICAgIGNvbXBhbnk6IGNvbXBhbnlWYWx1ZXNbaV0sXHJcbiAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGVWYWx1ZXNbaV0sXHJcbiAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZVZhbHVlc1tpXSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZXhwRGVzY3JpcHRpb25WYWx1ZXNbaV1cclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2cobGlzdEV4cCk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9