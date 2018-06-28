import {googleProvider,auth} from "../firebase";
import {getUserConcerts} from "./concerts";

const LOGGEDIN = 'auth/LOGGEDIN';
const LOGGEDOUT = 'auth/LOGGEDOUT';

const loggedIn= (user)=>({type:LOGGEDIN,user});
export const loggedOut= ()=>({type:LOGGEDOUT});


export const logInByGoogle = ()=> (dispatch,getState)=> (
    auth.signInWithRedirect(googleProvider)
);

export const initAuthUserSync = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(loggedIn(user));
                dispatch(getUserConcerts())
            }
            else
                dispatch(loggedOut())
        }
    )
};

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
            };
        default:
                return state
    }
}