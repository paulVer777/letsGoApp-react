import {database} from "../firebase";
import {mapObjectToArray} from "../functions_extra";

const PUTCONCERTSTOSTATE = 'concerts/PUTCONCERTSTOSTATE';
const ONINPUTHANDLER = 'concerts/ONINPUTHANDLER';

const putConcertsToState = (concerts) => ({type: PUTCONCERTSTOSTATE, concerts});
export const onInputHandler = (txt) => ({type: ONINPUTHANDLER, txt});

const initialState = {
    concerts: [],
    filter: ""
};

export const removeConcert = (id) => (dispatch, getState) => {
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
        case ONINPUTHANDLER:
            return {
                ...state,
                filter: action.txt
            };
        default:
            return state
    }
}