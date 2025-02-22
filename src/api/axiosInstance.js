import axios from "axios";
import { BaseURL, access_token } from "../constants/constant.js";

// Base API client
export const apiClient = axios.create({
    baseURL: `${BaseURL}/api`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
    },
});

// Base API client2
export const apiAuthClient = axios.create({
    baseURL: `${BaseURL}/auth`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
    },
});
