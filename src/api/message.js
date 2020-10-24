import axios from "axios";
import authHeader from "../utils/authHeader";

class MessageApi {
    _baseUrl = "https://fastpoke.com/message/";

    sendMsg = async ({
                              userType,
                              password,
                              email,
                              firstName,
                              lastName,
                              location,
                          }) => {
        const res = await axios.post(this._baseUrl + "register-user/", {
            password,
            email,
            location,
            user_type: userType,
            first_name: firstName,
            last_name: lastName,
        });

        return res;
    };

    prevListMsg = async ({ password, email, clientId }) => {
        const formData = new FormData();
        formData.append("password", password);
        formData.append("email", email);
        formData.append("client_id", clientId);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };

        const res = await axios.post(
            this._baseUrl + "get-token/",
            formData,
            config
        );

        return res;
    };

    CoversationMsg = async ({ uid, password, newPassword }, token) => {
        const formData = new FormData();
        formData.append("password", password);
        formData.append("new_password", newPassword);

        const config = {
            headers: {
                Authorization: "Bearer " + token,
                "content-type": "multipart/form-data",
            },
        };

        const res = await axios.patch(
            this._baseUrl + "change-password/" + uid,
            formData,
            config
        );

        return res;
    };

    readMsg = async ({ uid, newPassword }, token) => {
        const formData = new FormData();
        formData.append("new_password", newPassword);
        formData.append("uid", uid);

        const config = {
            headers: {
                Authorization: "Bearer " + token,
                "content-type": "multipart/form-data",
            },
        };

        const res = await axios.post(
            this._baseUrl + "reset-password/",
            formData,
            config
        );

        return res;
    };

    fetchNewMsg = async ({ email }) => {
        const formData = new FormData();

        formData.append("email", email);

        const res = await axios.post(
            this._baseUrl + "send-password-reset-email/",
            formData
        );

        return res;
    };
}

export default MessageApi;
