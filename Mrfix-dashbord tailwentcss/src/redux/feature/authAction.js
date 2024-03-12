import axios from "axios";
import { basicUrl } from "../../constant";

export const authLoginAction = (auth, navigate) => {
    axios.post(`${basicUrl}auth/login`, auth)
        .then(res => {

            localStorage.setItem("token", res.data.token);
            navigate("/")
        })
};


export const logOutAction = (navigate) => {
    localStorage.removeItem("token")
    navigate("/login")
}