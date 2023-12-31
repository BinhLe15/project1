import axios from "axios";
import { BASE_URL } from "../config/config";

class UserDataService {
    postLogin(email, password, cookieValue) {
        return axios.post('http://localhost:8000/api/login', {email, password}, {
            headers: {
                Authorization: cookieValue,
            }
        });
    }
    postSendMail(email) {
        return axios.post('http://localhost:8000/api/forgot-password', {email});
    }
    postConfirmOtp(emailResetPassword, verificationCode) {
        return axios.post(`http://localhost:8000/api/reset-password/confirmOtp`, (emailResetPassword, verificationCode))
    }
    postNewPassword(emailResetPassword, password) {
        return axios.post(`http://localhost:8000/api/reset-password`, (emailResetPassword, password))
    }
}       

export default new UserDataService();