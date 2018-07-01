import {database, storageRef} from "../firebase";


const ONINTPUTHANDLER = 'addEvent/ONINPUTHANDLER';
const ONINPUTFILEHANDLER = 'addEvent/ONINPUTFILEHANDLER';
const SAVEURL = 'addEvent/SAVEURL';
const CLEARSTATE = 'addConcert/CLEARSTATE';


export const onInputHandler = (txt, place) => ({type: ONINTPUTHANDLER, txt, place});
export const onInputFileHandler = (file) => ({type: ONINPUTFILEHANDLER, file});
export const clearState = () => ({type: CLEARSTATE});

const saveUrl = (url) => ({type: SAVEURL, url});

export const sendImgToDatabase = () => (dispatch, getState) => {

    const state = getState();
    const name = state.addConcert.img.name;

     storageRef.ref(name).put(state.addConcert.img).then(snapshot => console.log(snapshot))
        .then(() => (
            storageRef.ref(name).getDownloadURL().then(response => dispatch(saveUrl(response))
            )
        ))
};

export const sendConcertToDb = () => (dispatch, getState) => {
    const state = getState();
    const userUid = state.auth.user.uid;
    const addConcert=state.addConcert;

    if(addConcert.artist && addConcert.city && addConcert.date && addConcert.price && addConcert.description
    && addConcert.url)
    {
        database.ref('/Concerts/').push(
            {
                artist: state.addConcert.artist,
                city: state.addConcert.city,
                date: state.addConcert.date,
                price: state.addConcert.price,
                description: state.addConcert.description,
                url: state.addConcert.url,
                id: userUid
            }
        );
        dispatch(clearState())
    }
        else alert("Please fill all empty fields before add new concert")
};
const initialState = {

    artist: "",
    city: "",
    date: "",
    price: "",
    description: "",
    img: null,
    url: ""
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ONINTPUTHANDLER:
            return {
                ...state,
                [action.place]: action.txt
            };
        case ONINPUTFILEHANDLER:
            return {
                ...state,
                img: action.file
            };
        case SAVEURL:
            return {
                ...state,
                url: action.url
            };
        case CLEARSTATE:
            return {
                ...state,
                artist: "",
                city: "",
                date: "",
                price: "",
                description: "",
                img: null,
                url: ""
            };
        default:
            return state
    }
}