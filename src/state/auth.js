const LOGGEDIN = 'auth/LOGGEDIN';
const LOGGEDOUT = 'auth/LOGGEDOUT';

const loggedIn= (user)=>({type:LOGGEDIN,user});
const loggedOut= (user)=>({type:LOGGEDOUT});

const initialState = {

    isUserLoggedIn: false,
    user: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGGEDIN:
            return {
                isUserLoggedIn: true,
                user: action.user
            };
        case LOGGEDOUT:
            return {
                isUserLoggedIn: false,
                user: null
            }
    }
}