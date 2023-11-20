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

    // find cv where user id
    getCV(userId: number, cvId: number): any | null {
        try {
            const user = this.users.find(u => u.id === userId);

            if (user) {
                const cv = user.cvList.find(cv => cv.cvId === cvId);
                return cv || null;
            } else {
                console.error(`User with ID ${userId} not found.`);
                return null;
            }
        } catch (error) {
            console.error(`Error getting CV: ${error.message}`);
            throw error;
        }
    }

    getAllCV(userId: number): any | null {
        try {
            const user = this.users.find(u => u.id === userId);

            if (user) {
                const cv = user.cvList;
                return cv || null;
            } else {
                console.error(`User with ID ${userId} not found.`);
                return null;
            }
        } catch (error) {
            console.error(`Error getting CV: ${error.message}`);
            throw error;
        }
    }
}