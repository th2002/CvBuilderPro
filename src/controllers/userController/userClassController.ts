import { User } from "../../entity/user";
import UserService from "../../models/userModel/getUserModel";
import Swal from "sweetalert2";

export default class UserController {
  private userService: UserService;

  constructor(userService?: UserService) {
    this.userService = userService;
  }

  async login(username: string, password: string): Promise<User | null> {
    await this.userService.getUsersFromAPI();

    try {
      // sử dụng phương thức getUser định nghĩa ở class model user để tìm user trong api
      const user = this.userService.getUser(username, password);

      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(function () {
          window.location.href = "./pages/home.html";
        }, 1500);
        return user;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login information is incorrect",
        });
        return null;
      }
    } catch (error) {
      console.error(`Error during login: ${error.message}`);
      throw error;
    }
  }

  setUserInfoInLocalStorage(user: User) {
    // Set user information in local storage
    localStorage.setItem("userId", user.id.toString());
    localStorage.setItem("username", user.username);
    localStorage.setItem("fullname", user.personalInfo.fullName);
  }

  getLocalStorageItem(key: string): string | null {
    // Get item from local storage
    return localStorage.getItem(key);
  }

  logout() {
    this.clearLocalStorage();

    window.location.href = "../index.html";
  }

  private clearLocalStorage() {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("fullname");
  }
}
