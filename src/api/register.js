import axios from "axios";

export function login(user) {
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:8081/login/in',
        data: user
    })
}