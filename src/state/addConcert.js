import {database, storageRef} from "../firebase";


const ONINTPUTHANDLER = 'addEvent/ONINPUTHANDLER';
const ONINPUTFILEHANDLER = 'addEvent/ONINPUTFILEHANDLER';
const SAVEURL = 'addEvent/SAVEURL';


export const onInputHandler = (txt, place) => ({type: ONINTPUTHANDLER, txt, place});
export const onInputFileHandler = (file) => ({type: ONINPUTFILEHANDLER, file});
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
    database.ref('/Users/' + userUid + '/Concerts').push(
        {
            artist: state.addConcert.artist,
            city: state.addConcert.city,
            date: state.addConcert.date,
            price: state.addConcert.price,
            description: state.addConcert.description,
            url:state.addConcert.url
        }
    );
    database.ref('/Concerts/').push(
        {
            artist: state.addConcert.artist,
            city: state.addConcert.city,
            date: state.addConcert.date,
            price: state.addConcert.price,
            description: state.addConcert.description,
            url:state.addConcert.url
        }
    );
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
        default:
            return state
    }
}