import "./assets/styles/main.css";
import "./assets/favicon/favicon-webpack.png";
import UserController from "./controllers/userController/userClassController";
import UserService from "./models/userModel/getUserModel";
import Swal from "sweetalert2";

const btn_login = document.getElementById("btnLogin")! as HTMLButtonElement;

btn_login.addEventListener("click", login);

function login() {
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