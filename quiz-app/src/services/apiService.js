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

    return axios.post('api/participant/create', data);
}

const getAllUser = () => {

    return axios.post('api/participant/getall');
}

export { postCreateNewUser, getAllUser };