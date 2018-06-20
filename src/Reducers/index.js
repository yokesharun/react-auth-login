const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const initialState = {
    name: '',
    password : '',
    validation : false,
    validationMessage : ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

    case LOGIN_SUCCESS: {
        return Object.assign({}, state, {
            validation: true,
            validationMessage: ""
        });
    }

    case LOGIN_FAILED: {
        return Object.assign({}, state, {
            validation: false,
            validationMessage: "Invalid Credentials"
        });
    }

    default:
        return state;
    }
}