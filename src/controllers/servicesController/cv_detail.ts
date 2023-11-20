import { getCvDetail } from "../functionEvent/functions";

(async () => {
  const cv = await getCvDetail();
  const sections = cv.sections;
  const skills = sections.skills.map(skill =>  `<li>${skill}</li>`).join('');
  const tools = sections.tools.map(tool =>  `<li>${tool}</li>`).join('');
  const experience = sections
    .experience
    .map(exp => {
      return `
        <h1 class="text-xl text-[#222] font-bold">${exp.title} - ${exp.company}</h1>
        <h3 class="text-lg font-semibold text-primary">${exp.startDate} - ${exp.endDate}</h3>
        <li class="mb-8 ml-5 list-disc">${exp.description}</li>
      `;
    })
    .join('');

  const education = sections
    .education
    .map(edu => {
      return `
        <h1 class="text-xl text-[#222] font-bold">
          ${edu.school}
        </h1>
        <p class="mb-8">
          School ${edu.degree} with major in web design ${edu.major}, Graduation year ${edu.graduationYear}
        </p>
      `
    })
    .join('');

  const displayCv = document.getElementById('displayCv')! as HTMLDivElement;

  displayCv.innerHTML = `
    <div class="flex flex-wrap w-[90%] shadow-2xl shadow-slate-600">
        <div class="flex flex-col gap-3 w-[30%] px-6 py-7">
          <h1 class="text-3xl font-bold uppercase text-[#222]">
            ${sections.personalInfo.fullName}
          </h1>
          <h2 class="mb-2 text-xl font-semibold text-primary">
            ${sections.nominee}
          </h2>
          <p class="mb-8">
            ${cv.description}
          </p>
          <h3 class="text-lg font-semibold text-primary">Contact</h3>
          <ul class="mb-8">
            <li>
              <i class="mr-3 fa-solid fa-envelope"></i>
              ${sections.personalInfo.email}
            </li>
            <li>
              <i class="mr-3 fa-brands fa-linkedin"></i>
              ${sections.personalInfo.linkedin}
            </li>
            <li><i class="mr-3 fa-solid fa-phone"></i> ${sections.personalInfo.phone}</li>
          </ul>
          <h3 class="text-lg font-semibold text-primary">Skills</h3>
          <ul class="mb-8">
            ${skills}
          </ul>
          <h3 class="text-lg font-semibold text-primary">Tools</h3>
          <ul>
            ${tools}
          </ul>
        </div>
        <div class="w-[70%] py-7 pr-7">
          <div class="flex flex-col gap-3 bg-[#F9F9F9] rounded-lg px-6 py-7">
            ${experience}
          </div>
        </div>
        <div class="w-full px-6 pb-7">
          <div class="flex px-10 py-10 w-full rounded-xl bg-[#F9F9F9]">
            <div class="flex flex-col gap-3 w-[100%]">
              <h3 class="mb-6 text-lg font-semibold text-primary">
                Education & Learning
              </h3>
              ${education}
        </div>
      </div>
  `

})()