import axios from "axios";

const req = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 3600,
    headers: { "Content-Type": "application/json" }
});

export { req }