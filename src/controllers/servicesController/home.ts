import { logout } from "../functionEvent/functions";
import { getAllCVByUserId } from "../functionEvent/functions";

const btnNextPageAddCv = document.getElementById(
  "btnNextPageAddCv"
)! as HTMLButtonElement;
btnNextPageAddCv.addEventListener("click", () => {
  window.location.href = "./add_form.html";
});

const btnLogout = document.getElementById("btnLogout")! as HTMLElement;
btnLogout.addEventListener("click", logout);

/**
 * Lấy danh sách CV theo user id lưu ở localStogare
 * method: GET
 */

(async () => {
  const myListCV = document.getElementById("myListCV")! as HTMLDivElement;
  const listCV = await getAllCVByUserId();

  let htmlContent = "";

  if (listCV.length > 0) {
      for (let cv of listCV) {
        htmlContent += `
          <div
            class="shadow-md shadow-slate-600 overflow-hidden group relative h-[300px] bg-black">
            <div
              class="absolute top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-50"></div>
            <h2 class="absolute text-white font-bold left-3 top-[70%] z-50">
              <a
                class="hover:underline hover:decoration-solid"
                href="./form.html?id=${cv.cvId}"
                >${cv.title}</a
              >
            </h2>
            <div
              class="z-50 w-7 h-7 absolute bg-[#222] bg-opacity-50 rounded-full right-[20%] top-[70%]">
              <a class="flex items-center justify-center w-full h-full" href="#"
                ><i class="text-xs text-white fa-solid fa-pen"></i
              ></a>
            </div>
            <p
              class="z-50 text-white text-xs font-semibold absolute left-3 top-[80%]">
              ${
                cv.updateDate 
                  ? `Ngày cập nhật: ${cv.updateDate}` 
                  : `Ngày tạo: ${cv.createDate}`
              }
            </p>
            <i
              class="fa-solid fa-trash-can animate-bounce z-50 cursor-pointer absolute left-3 top-[90%] text-white"></i>
            <img
              width="300"
              src="../images/bannercv.png"
              alt="banner cv"
              class="object-top h-full transition duration-300 ease-in-out z-1 group-hover:scale-125" />
          </div>
        `;
    }

    myListCV.innerHTML = htmlContent
  } else {
    myListCV.innerHTML = `<p>Hãy tạo CV dành riêng cho bạn ngay bây giờ!</p>`
  }

  
})();
