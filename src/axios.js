import axios from "axios";

export default axios.create({
    baseURL: "https://5000-purple-salmon-uy3kza3n.ws-us14.gitpod.io/",
    headers: {
        "Content-Type": "application/json",
    },
});
