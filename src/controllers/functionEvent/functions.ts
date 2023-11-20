import UserController from "../userController/userClassController";
import UserService from "../../models/userModel/getUserModel";
import { CV } from "../../entity/user";
import Swal from "sweetalert2";

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

