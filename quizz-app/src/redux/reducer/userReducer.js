
import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";
const INITIAL_STATE = {
    account: {
        username: "",
    },
    isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log(action)
            return {
                ...state,
                account: {
                    username: action?.payload?.username,
                },
                isAuthenticated: true,
            };
        default: return state;
    }
};

export default userReducer;