import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDE1OGI3NzcwNmZiN2I4NDhjZTQxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDM4MzQzOCwiZXhwIjoxNjUwNTU2MjM4fQ.vf4Dpv09RpLHe10UjKLiJ-VsP5HEXFbequmZIwBWcyo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});