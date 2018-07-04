import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import {onInputHandler, sendConcertToDb, onInputFileHandler, sendImgToDatabase} from "../state/addConcert";
import Button from '@material-ui/core/Button';

const AddConcert = (props) => (

    <div>
        <h3 className='text-center'>Add new concert</h3>

    <div className='addConcert__form'>

        <TextField
            onChange={props.onInput}
            name={'artist'}
            placeholder={'Artist'}
            fullWidth={true}
        />
        <TextField
            onChange={props.onInput}
            name={'city'}
            placeholder={'City'}
            fullWidth={true}
        />
        <TextField
            onChange={props.onInput}
            name={'date'}
            placeholder={'Date'}
            fullWidth={true}
        />
        <TextField
            onChange={props.onInput}
            name={'price'}
            placeholder={'Price for tickets'}
            fullWidth={true}
        />
        <TextField
            onChange={props.onInput}
            name={'description'}
            placeholder={'Description'}
            multiline={true}
            rows={5}
            fullWidth={true}
            className='mb-5'
        />
        <label className="custom-file-upload">
        <input type='file'
                   onChange={props.takeFile}

        />ADD PHOTO
        </label>

        {
            props.photo ?
                <Button onClick={props.send}
                        variant={"contained"}
                        fullWidth={true}
                        className='mt-2'
                        color='primary'
                >Upload photo</Button>
                :
                null

        }
        <Button
            variant={"contained"}
            onClick={props.addConcert}
            fullWidth={true}
            className='mt-5'
            color='primary'
        >Add Concert
        </Button>

    </div>
    </div>
);
const mapStateToProps = (state) => ({
    photo: state.addConcert.img
});
const mapDispatchToProps = (dispatch) => ({

    onInput: (event) => dispatch(onInputHandler(event.target.value, event.target.name)),
    addConcert: () => dispatch(sendConcertToDb()),
    takeFile: (event) => dispatch(onInputFileHandler(event.target.files[0])),
    send: () => dispatch(sendImgToDatabase())
});
export default connect(mapStateToProps, mapDispatchToProps)(AddConcert)

