const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',


    //admin

    //allcode
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',
    //allcode

    //user

    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',

    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',

    SAVE_DETAIL_MEMBER_SUCCESS: 'SAVE_DETAIL_MEMBER_SUCCESS',
    SAVE_DETAIL_MEMBER_FAILED: 'SAVE_DETAIL_MEMBER_FAILED',
    //user
    //team
    DELETE_TEAM_SUCCESS: "DELETE_TEAM_SUCCESS",
    DELETE_TEAM_FAILED: 'DELETE_TEAM_FAILED',

    EDIT_TEAM_SUCCESS: 'EDIT_TEAM_SUCCESS',
    EDIT_TEAM_FAILED: 'EDIT_TEAM_FAILED',

    FETCH_ALL_TEAM_SUCCESS: 'FETCH_ALL_TEAM_SUCCESS',
    FETCH_ALL_TEAM_FAILED: 'FETCH_ALL_TEAM_FAILED',

    CREATE_TEAM_SUCCESS: 'CREATE_TEAM_SUCCESS',
    CREATE_TEAM_FAILED: 'CREATE_TEAM_FAILED',
    //team

    //joinTeam
    ADD_USER_ON_TEAM_SUCCESS: 'ADD_USER_ON_TEAM_SUCCESS',
    ADD_USER_ON_TEAM_FAILED: 'ADD_USER_ON_TEAM_FAILED',

    ADD_USER_ON_PROJECT_SUCCESS: 'ADD_USER_ON_PROJECT_SUCCESS',
    ADD_USER_ON_PROJECT_FAILED: 'ADD_USER_ON_PROJECT_FAILED',
    //joinTeam

    //project
    CREATE_PROJECT_SUCCESS: 'CREATE_PROJECT_SUCCESS',
    CREATE_PROJECT_FAILED: 'CREATE_PROJECT_FAILED',

    DELETE_PROJECT_SUCCESS: "DELETE_PROJECT_SUCCESS",
    DELETE_PROJECT_FAILED: 'DELETE_PROJECT_FAILED',

    EDIT_PROJECT_SUCCESS: 'EDIT_PROJECT_SUCCESS',
    EDIT_PROJECT_FAILED: 'EDIT_PROJECT_FAILED',

    FETCH_ALL_PROJECT_SUCCESS: 'FETCH_ALL_PROJECT_SUCCESS',
    FETCH_ALL_PROJECT_FAILED: 'FETCH_ALL_PROJECT_FAILED',
    //project
    //login
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    //login

    FETCH_ALL_TEAM_W_USER_SUCCESS: 'FETCH_ALL_TEAM_W_USER_SUCCESS',
    FETCH_ALL_TEAM_W_USER_FAILED: 'FETCH_ALL_TEAM_W_USER_FAILED',

})

export default actionTypes