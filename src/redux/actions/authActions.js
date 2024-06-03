import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';

const apiUrl = `http://localhost:8000/users`

export const signUp = (user) => async dispatch => {
    try {
        const res = await axios.post(apiUrl, user);
        dispatch({
            type: SIGN_UP,
            payload: res.data
        });
        return Promise.resolve(); 
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response && error.response.data ? error.response.data.message : 'Sign up failed'
        });
        return Promise.reject(); 
    }
};

export const login = (email, password) => async dispatch => {
    try {
        const res = await axios.get(`${apiUrl}?email=${email}`);
        const user = res.data;
        if (email && password && user.length && user[0].password === password) {
            dispatch({
                type: LOGIN,
                payload: user
            });
            return Promise.resolve(); 
        } else {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Invalid credentials'
            });
            return Promise.reject(); 
        }
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response && error.response.data ? error.response.data.message : 'Login failed'
        });
        return Promise.reject(); 
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    return Promise.resolve();
};

