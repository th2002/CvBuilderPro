import {
  PersonalInfo,
  Experience,
  Education,
  CV,
  CVSection,
} from "../../entity/user";
import UserService from "../../models/userModel/getUserModel";
import UserController from "../userController/userClassController";
import { API_CV } from "../../API/api";
import Swal from "sweetalert2";
import axios from "axios";

function getCurrentDate(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Thêm số 0 đằng trước nếu tháng chỉ có 1 chữ số
  const day = today.getDate().toString().padStart(2, "0"); // Thêm số 0 đằng trước nếu ngày chỉ có 1 chữ số

  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
}

document.getElementById("btnCreateCV").addEventListener("click", async () => {
  // Info
  const fullname = document.querySelector(".fullname")! as HTMLInputElement;
  const fullnameValue = fullname.value;

  const workPosition = document.querySelector(
    ".workPosition"
  )! as HTMLInputElement;
  const workPositionValue = workPosition.value;

  const description: HTMLTextAreaElement | null = document.querySelector(
    ".description"
  ) as HTMLTextAreaElement;
  const descriptionValue = description ? description.value : "";

  // Contact
  const email: HTMLInputElement | null = document.querySelector(
    ".email"
  ) as HTMLInputElement;
  const linkedin: HTMLInputElement | null = document.querySelector(
    ".linkedin"
  ) as HTMLInputElement;
  const phone: HTMLInputElement | null = document.querySelector(
    ".phone"
  ) as HTMLInputElement;

  // Skills & Tools Input
  const skillInputs: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".skillInput");
  const skillInputValues: string[] | null = Array.from(skillInputs).map(
    (input) => input.value
  );

  const toolInputs: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".toolInput");
  const toolInputValues: string[] | null = Array.from(toolInputs).map(
    (input) => input.value
  );

  // Skills & Tools Span
  const skillSpans: NodeListOf<HTMLSpanElement> | null =
    document.querySelectorAll(".skillSpan");
  const skillSpansValues: string[] | null = Array.from(skillSpans).map(
    (span) => span.textContent
  );

  const toolSpans: NodeListOf<HTMLSpanElement> | null =
    document.querySelectorAll(".toolSpan");
  const toolSpansValues: string[] | null = Array.from(toolSpans).map(
    (span) => span.textContent
  );

  // Experience
  const jobPositions: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".jobPosition");
  const jobPositionValues: string[] | null = Array.from(jobPositions).map(
    (job) => job.value
  );

  const companies: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".company");
  const companyValues: string[] | null = Array.from(companies).map(
    (company) => company.value
  );

  const startDates: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".startDate");
  const startDateValues: string[] | null = Array.from(startDates).map(
    (startDate) => startDate.value
  );

  const endDates: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".endDate");
  const endDateValues: string[] | null = Array.from(endDates).map(
    (endDate) => endDate.value
  );

  const expDescriptions: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".expDescription");
  const expDescriptionValues: string[] | null = Array.from(expDescriptions).map(
    (expDescription) => expDescription.value
  );

  const majors: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".major");
  const majorValues: string[] | null = Array.from(majors).map(
    (major) => major.value
  );

  const degrees: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".degree");
  const degreeValues: string[] | null = Array.from(degrees).map(
    (degree) => degree.value
  );

  const schools: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".school");
  const schoolValues: string[] | null = Array.from(schools).map(
    (school) => school.value
  );

  const graduationYears: NodeListOf<HTMLInputElement> | null =
    document.querySelectorAll(".graduationYear");
  const graduationYearValues: string[] | null = Array.from(graduationYears).map(
    (graduationYear) => graduationYear.value
  );

  // Validations
  if (fullname.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Full name cannot be left blank!",
    });
    return false;
  }

  if (workPosition.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Occupation cannot be left blank!",
    });
    return false;
  }

  // tính xem có bao nhiều exp rồi duyệt vòng for lưu vào mảng
  const numberOfSectionsExp = expDescriptions.length;
  const listExp: Experience[] = [];
  for (let i = 0; i < numberOfSectionsExp; i++) {
    listExp.push({
      title: jobPositionValues[i] || "",
      company: companyValues[i] || "",
      startDate: startDateValues[i] || "",
      endDate: endDateValues[i] || "",
      description: expDescriptionValues[i] || "",
    });
  }

  // tính xem có bao nhiều edu rồi duyệt vòng for lưu vào mảng
  const numberOfSectionsEdu = majors.length;
  const listEdu: Education[] = [];
  for (let i = 0; i < numberOfSectionsEdu; i++) {
    listEdu.push({
      degree: degreeValues[i] || "",
      major: majorValues[i] || "",
      school: schoolValues[i] || "",
      graduationYear: parseInt(graduationYearValues[i], 10),
    });
  }

  const userService = new UserService();
  const userController = new UserController();
  const userId = userController.getLocalStorageItem("userId");

  await userService.getUsersFromAPI();
  const cvListByUserId = userService.getAllCV(parseInt(userId, 10));
  const cvIdHigher = cvListByUserId[cvListByUserId.length - 1].cvId;

  const toDay = getCurrentDate();

  // lưu thông tin person
  const personalInfo: PersonalInfo = {
    fullName: fullname.value,
    email: email ? email.value : "",
    linkedin: linkedin ? linkedin.value : "",
    phone: phone ? phone.value : "",
  };

  const skills = [...skillInputValues, ...skillSpansValues];
  const tools = [...toolInputValues, ...toolSpansValues];

  let titleCV = "";

  Swal.fire({
    title: "Please give your cv a title",
    imageUrl:
      "https://s.memehay.com/files/posts/20210126/meo-vang-dua-ngon-tay-like.jpg",
    imageWidth: 475,
    imageHeight: 400,
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Submit",
    showLoaderOnConfirm: true,
    preConfirm: (title) => {
      titleCV = title;
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      const CV: CV = {
        cvId: cvIdHigher + 1,
        title: titleCV,
        description: descriptionValue,
        sections: {
          nominee: workPositionValue,
          personalInfo: personalInfo,
          education: listEdu,
          experience: listExp,
          skills: skills,
          tools: tools,
        },
        createDate: toDay,
        updateDate: "",
      };

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Create a successful cv",
        showConfirmButton: false,
        timer: 1500,
      })
      .then(async () => {
        const user = await userService.getUserById(parseInt(userId, 10))

        if (user) {
          user.cvList.push(CV)
        }
        axios.patch(`${API_CV}/${userId}`, user)
          .then(() => { location.href = './home.html' })
      });
    };
  });
});