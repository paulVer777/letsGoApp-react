import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import {onInputHandler,sendConcertToDb,onInputFileHandler,sendImgToDatabase} from "../state/addConcert";
import Button from '@material-ui/core/Button';


const AddConcert = (props) => (

    <div>
        <TextField
            onChange={props.onInput}
            name={'artist'}
            placeholder={'Artist'}
        />
        <TextField
            onChange={props.onInput}
            name={'city'}
            placeholder={'City'}
        />
        <TextField
            onChange={props.onInput}
            name={'date'}
            placeholder={'Date'}
        />
        <TextField
            onChange={props.onInput}
            name={'price'}
            placeholder={'price for tickets'}
        />
        <TextField
            onChange={props.onInput}
            name={'description'}
            placeholder={'description'}
            multiline={true}
            rows={10}
        />
        <input type='file' onChange={props.takeFile}/>
        <Button
            variant={"contained"}
            onClick={props.addConcert}
        >Add Concert
        </Button>
<button onClick={props.send}>send</button>


    </div>
);

const mapStateToProps = (state) => ({



})

const mapDispatchToProps = (dispatch) => ({

    onInput: (event) => dispatch(onInputHandler(event.target.value, event.target.name)),
    addConcert:()=> dispatch(sendConcertToDb()),
    takeFile:(event)=>dispatch(onInputFileHandler(event.target.files[0])),
    send:()=>dispatch(sendImgToDatabase())
});


export default connect(mapStateToProps, mapDispatchToProps)(AddConcert)

