const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
   
    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    GET_GENDER_START: 'GET_GENDER_START',
    GET_GENDER_SUCCESS: 'GET_ALLCODE_SUCCESS',
    FRECH_GENDER_END: 'FRECH_ALLCODE_END',

    GET_POSITION_SUCCESS: 'GET_POSITION_SUCCESS',
    GET_POSITION_FAIL: 'GET_POSITION_FAIL',

    
    GET_ROLE_SUCCESS: 'GET_ROLE_SUCCESS',
    GET_ROLE_FAIL: 'GET_ROLE_FAIL',

    SAVE_USER_SUCCESS: 'SAVE_USER_SUCCESS',
    SAVE_USER_FAIL: 'SAVE_USER_FAIL',

    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAIL: 'GET_USER_FAIL',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAIL: 'DELETE_USER_FAIL',

    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAIL: 'UPDATE_USER_FAIL',

    GET_TOP_DOCTOR_SUCCESS: 'GET_TOP_DOCTOR_SUCCESS',
    GET_TOP_DOCTOR_FAIL: 'GET_TOP_DOCTOR_FAIL',

    

})

export default actionTypes;