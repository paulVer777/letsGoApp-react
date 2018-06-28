import {database} from "../firebase";
import {mapObjectToArray} from "../functions_extra";

const PUTCONCERTSTOSTATE = 'concerts/PUTCONCERTSTOSTATE';
const PUTUSERSCONCERTSTOSTATE = 'concerts/PUTUSERCONCERTSTOSTATE';

const putConcertsToState = (concerts) => ({type: PUTCONCERTSTOSTATE, concerts});
const putUsersConcertsToState = (concerts) => ({type: PUTUSERSCONCERTSTOSTATE, concerts});

const initialState = {
    concerts: [],
    userConcerts: []
};



export const removeConcert=(id)=>(dispatch,getState)=>{
    database.ref(`/Concerts/${id}`).remove()
};

export const getConcertsFromDb = () => (dispatch, getState) => {
    database.ref('/Concerts/').on(
        'value',
        (snapshot) => dispatch(putConcertsToState(mapObjectToArray(snapshot.val())))
    )
};

export const getUserConcerts = () => (dispatch, getState) => {

    const state = getState();
    const user = state.auth.user.uid;

    console.log(user);

    database.ref(`/Users/${user}/Concerts/`).on(
        'value',
        (snapshot) => dispatch(putUsersConcertsToState(mapObjectToArray(snapshot.val()))))
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PUTCONCERTSTOSTATE:
            return {
                ...state,
                concerts: action.concerts
            };
        case PUTUSERSCONCERTSTOSTATE:
            return {
                ...state,
                userConcerts: action.concerts
            };
        default:
            return state
    }
}