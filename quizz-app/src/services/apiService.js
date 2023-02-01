import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    //Data
    let data = {
        email: email,
        password: password,
        username: username,
        role: role,
        image: image,
    }

    return axios.post('api/v1/participant/create', data);
}

const getAllUser = () => {

    return axios.get('api/v1/participant/getall');
}

const deleteUser = (idUser) => {

    return axios.delete('api/v1/participant/delete', { data: { id: idUser } });
}

const putUpdateNewUser = (id, email, password, username, role, image, refresh_token) => {
    //Data
    let data = {
        id: id,
        email: email,
        password: password,
        username: username,
        role: role,
        image: image,
        refresh_token: refresh_token,
    }

    return axios.put('api/v1/participant/edit', data);
}

const getUsersWithPanigate = (page, limit) => {
    return axios.get(`api/v1/participant/get?page=${page}&limit=${limit}`);
}

const postLogin = (email, password) => {
    return axios.post(`api/v1/auth/login?email=${email}&password=${password}`);
}

const postRegister = (email, password, username) => {
    return axios.post(`api/v1/auth/register?email=${email}&password=${password}&username=${username}`);
}

const getQuizzsByUser = (idUser) => {
    return axios.get(`api/v1/quizz/GetQuizzsByParticipant?idUser=${idUser}`);
}

const getQuizzDetail = (id) => {
    return axios.get(`api/v1/quizz/GetDetail?id=${id}`);
}

export { postCreateNewUser, getAllUser, putUpdateNewUser, deleteUser, getUsersWithPanigate, postLogin, postRegister, getQuizzsByUser, getQuizzDetail };