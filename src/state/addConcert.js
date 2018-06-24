
const ONINTPUTHANDLER='addEvent/ONINPUTHANDLER';

export const onInputHandler=(txt,place)=>({type:ONINTPUTHANDLER,event,place});

const initialState={

    artist:"",
    city:"",
    date:"",
    price:"",
    description:""
};

export default (state=initialState,action)=>{
    switch (action.type) {
        case ONINTPUTHANDLER:
            return {




            }

    }
}