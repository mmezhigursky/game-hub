import axios from "axios";
require('dotenv').config()
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: process.env.API_KEY
    }
});