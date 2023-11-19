import UserController from "../userController/userClassController";
import UserService from '../../models/userModel/getUserModel';
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