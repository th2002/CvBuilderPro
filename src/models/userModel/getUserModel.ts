import { User } from "../../entity/user";
import { API_CV } from "../../API/api";
const axios = require("axios");

export default class UserService {
    private users: User[] = [];

    constructor() {
    
    }

    async getUsersFromAPI() {
        try {
            const response = await axios.get(API_CV);
            this.users = response.data;
        } catch (error) {
            console.error(`Error fetching users from API: ${error.message}`);
            throw error;
        }
    }

    // tìm user trong api
    getUser(username: string, password: string): User | null {
        return this.users.find(
            (u) => u.username === username && u.password === password
        ) || null;
    }
}