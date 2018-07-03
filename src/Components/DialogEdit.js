import React from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {dialogHandler} from "../state/concerts";
import {dialogsInputHandler, editConcert} from "../state/concerts";

const DialogEdit = (props) => (
    <div>
        <Dialog
            open={props.opens}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Edit concert</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send
                    updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    name="artist"
                    label="Artist"
                    fullWidth
                    onChange={props.inputHandler}
                    value={props.objectValues.artist}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="city"
                    label="City"
                    fullWidth
                    onChange={props.inputHandler}
                    value={props.objectValues.city}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="date"
                    label="Date"
                    fullWidth
                    onChange={props.inputHandler}
                    value={props.objectValues.date}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="price"
                    label="Price for tickets"
                    fullWidth
                    onChange={props.inputHandler}
                    value={props.objectValues.price}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="description"
                    label="Description"
                    fullWidth
                    onChange={props.inputHandler}
                    multiline={true}
                    rows={5}
                    value={props.objectValues.description}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.openOrClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.edit} color="primary">
                    Done
                </Button>

            </DialogActions>
        </Dialog>

    </div>


);
const mapStateToProps = (state) => ({

    opens: state.concerts.dialog,
    objectValues:state.concerts.value||""

});
const mapDispatchToProps = (dispatch) => ({

    openOrClose: () => dispatch(dialogHandler("",{
        artist: "",
        city: "",
        date: "",
        price: "",
        description: ""
    })),
    inputHandler: (event) => dispatch(dialogsInputHandler(event.target.value, event.target.name)),
    edit: () => dispatch(editConcert())
});
export default connect(mapStateToProps, mapDispatchToProps)(DialogEdit)