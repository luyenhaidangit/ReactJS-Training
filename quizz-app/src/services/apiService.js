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

export { postCreateNewUser, getAllUser, putUpdateNewUser };