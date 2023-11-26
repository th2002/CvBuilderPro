import UserController from "../userController/userClassController";
import UserService from "../../models/userModel/getUserModel";
import { CV } from "../../entity/user";
import { API_CV } from "../../API/api";
import Swal from "sweetalert2";
import axios from "axios";

export function login() {
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;
  const passwordInput = document.getElementById(
    "passwordInput"
  ) as HTMLInputElement;

  if (!nameInput.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The account cannot be left blank",
    });

    return false;
  }
  if (!passwordInput.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The password cannot be left blank",
    });

    return false;
  }

  const userService = new UserService();
  const userController = new UserController(userService);
  userController.login(nameInput.value, passwordInput.value).then((user) => {
    if (user) {
      userController.setUserInfoInLocalStorage(user);
      return true;
    }

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Login information is incorrect",
    });
  });
}

export function logout() {
  const userController = new UserController();
  userController.logout();
}

export async function getAllCVByUserId(): Promise<any[]> {
  try {
    const userService = new UserService();
    await userService.getUsersFromAPI();

    const userController = new UserController();
    const userId = userController.getLocalStorageItem("userId");

    const allCVs = userService.getAllCV(parseInt(userId, 10));

    return allCVs || [];
  } catch (error) {
    console.error(`Error in getAllCVByUserId: ${error.message}`);
    throw error;
  }
}

export async function getCvDetail(): Promise<CV | null> {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const cvId = urlParams.get("id");

    if (!cvId) {
      console.error("CV ID is missing in the URL parameters.");
      return null;
    }

    const userService = new UserService();
    await userService.getUsersFromAPI();

    const userController = new UserController();
    const userId = userController.getLocalStorageItem("userId");

    if (!userId) {
      console.error("User ID is missing in local storage.");
      return null;
    }

    const cv = userService.getCV(parseInt(userId, 10), parseInt(cvId, 10));
    if (!cv) {
      console.error(`CV with ID ${cvId} not found for user ${userId}.`);
      return null;
    }

    return cv;
  } catch (error) {
    console.error(`Error in getCvDetail: ${error.message}`);
    throw error;
  }
}

export async function handleDeleteCv(cvId: number, e: Event) {
  e.preventDefault();

  const userService = new UserService();
  const userController = new UserController();
  const userId = userController.getLocalStorageItem("userId");

  const user = await userService.getUserById(parseInt(userId, 10));

  // Lọc ra danh sách CV muốn giữ lại (không bao gồm CV cần xóa)
  user.cvList = user.cvList.filter((cv) => cv.cvId !== cvId);

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Delete a successful cv",
    showConfirmButton: false,
    timer: 1500,
  });

  Swal.fire({
    imageUrl:
      "https://img5.thuthuatphanmem.vn/uploads/2021/12/08/hic-hic_094558107.jpg",
    imageWidth: 300,
    imageHeight: 320,
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {

      axios.patch(`${API_CV}/${userId}`, user)
        .then(() => {
          document.getElementById(`cv${cvId}`).remove()

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        })
    }
  });
}
                                     
export function getCurrentDate(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Thêm số 0 đằng trước nếu tháng chỉ có 1 chữ số
  const day = today.getDate().toString().padStart(2, "0"); // Thêm số 0 đằng trước nếu ngày chỉ có 1 chữ số

  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
}