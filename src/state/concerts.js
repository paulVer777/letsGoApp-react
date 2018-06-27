import {database} from "../firebase";
import {mapObjectToArray} from "../functions_extra";

const PUTTOSTATE='concerts/PUTTOSTATE';

const putToState=(concerts)=>({type:PUTTOSTATE,concerts});

const initialState={
    concerts:[]
};

export const getConcertsFromDb = () => (dispatch, getState) => {
    database.ref('/Concerts/').on(
        'value',
        (snapshot) => dispatch(putToState(mapObjectToArray(snapshot.val())))
    )
};

export default (state=initialState,action) =>{
    switch (action.type){
        case PUTTOSTATE:
            return {
                ...state,
                concerts:action.concerts
            };
        default:
            return state
    }
}