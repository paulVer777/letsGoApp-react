import {database} from "../firebase";
import {mapObjectToArray} from "../functions_extra";

const PUTCONCERTSTOSTATE = 'concerts/PUTCONCERTSTOSTATE';

const putConcertsToState = (concerts) => ({type: PUTCONCERTSTOSTATE, concerts});

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

export default (state = initialState, action) => {
    switch (action.type) {
        case PUTCONCERTSTOSTATE:
            return {
                ...state,
                concerts: action.concerts
            };
        default:
            return state
    }
}