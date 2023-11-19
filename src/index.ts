import "./assets/styles/main.css";
import "./assets/favicon/favicon-webpack.png";
import { login } from "./controllers/functionEvent/functions";

const btn_login = document.getElementById("btnLogin")! as HTMLButtonElement;

btn_login.addEventListener("click", login);