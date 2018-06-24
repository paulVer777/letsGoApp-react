
const ONINTPUTHANDLER = 'addEvent/ONINPUTHANDLER';

export const onInputHandler = (txt, place) => ({type: ONINTPUTHANDLER, txt, place});

const initialState = {

    artist: "",
    city: "",
    date: "",
    price: "",
    description: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ONINTPUTHANDLER:
            return {
                ...state,
                [action.place]: action.txt
            };
        default:
            return state
    }
}