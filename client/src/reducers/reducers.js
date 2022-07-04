import {} from "../constants/constants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
    
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
    
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
    
        case USER_LOGIN_LOGOUT:
            return {};
    
        default:
            return state;
    }
};