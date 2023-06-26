import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-e159e/us-central1/api' //API Cloud function URL
});

export default instance;