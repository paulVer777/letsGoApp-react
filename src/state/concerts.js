import {database} from "../firebase";
import {mapObjectToArray} from "../functions_extra";

const PUTCONCERTSTOSTATE = 'concerts/PUTCONCERTSTOSTATE';
const ONINPUTHANDLER = 'concerts/ONINPUTHANDLER';
const DIALOGHANDLER = 'concerts/DIALOGHANDLER';
const DIALOGSINPUTHANDLER = 'concerts/DIALOGSINPUTHANDLER';
const CLEARSTATE = 'concerts/CLEARSTATE';

const putConcertsToState = (concerts) => ({type: PUTCONCERTSTOSTATE, concerts});
export const onInputHandler = (txt) => ({type: ONINPUTHANDLER, txt});
export const dialogHandler = (key) => ({type: DIALOGHANDLER, key});
export const dialogsInputHandler = (txt, place) => ({type: DIALOGSINPUTHANDLER, txt, place});
const clearState = () => ({type: CLEARSTATE});

const initialState = {
    concerts: [],
    filter: "",
    dialog: false,
    edited: "",
    editConcert: {
        artist: "",
        city: "",
        date: "",
        price: "",
        description: "",
    }
};
export const editConcert = () => (dispatch, getState) => {
    const state = getState();
    const id = state.concerts.edited;
    const edit = state.concerts.editConcert;

    if (edit.artist && edit.city && edit.date && edit.price && edit.description
    ) {
        database.ref(`/Concerts/${id}`).update(state.concerts.editConcert);
        dispatch(clearState());
        dispatch(dialogHandler())
    }
    else alert("Please fill all empty fields")

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
        case DIALOGHANDLER:
            return {
                ...state,
                dialog: !state.dialog,
                edited: action.key
            };
        case DIALOGSINPUTHANDLER:
            return {
                ...state,
                editConcert: {
                    ...state.editConcert,
                    [action.place]: action.txt
                }
            };
        case CLEARSTATE:
            return {
                ...state,
                editConcert: {
                    artist: "",
                    city: "",
                    date: "",
                    price: "",
                    description: "",
                }
            };
        default:
            return state
    }
}