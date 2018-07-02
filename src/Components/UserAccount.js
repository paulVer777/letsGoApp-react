import React from 'react'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import AddConcert from './AddConcert'
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeConcert} from "../state/concerts";
import {loggedOut} from "../state/auth";
import {dialogHandler} from "../state/concerts";
import Dialog from './DialogEdit'
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';


const UserAccount = (props) => (

    <div>
        <hr/>
        <h2 className='text-center mb-5 mt-5'>Hello {props.userName} !<Button
            variant={"contained"}
            onClick={props.logOut}
            className='ml-3'
            color={"secondary"}
        >Log Out</Button></h2>
        <hr className='mb-5'/>

        <AddConcert/>

        <hr className='mt-5 mb-3'/>

        <h3 className='mb-5 mt-5 text-center'>Your concerts</h3>

        <div className='addConcert__form'>
            {
                props.concerts.filter((value, index) => value.id === props.userUid)
                    .map((value, index) =>

                        <MenuItem>{value.artist}

                            <div className='d-flex justify-content-end w-100 mr-4'>
                               <Tooltip title={'Remove'} placement={"left-start"}>
                                <ListItemIcon>
                                    <DeleteIcon onClick={() => props.removeConcert(value.key)}/>
                                </ListItemIcon>
                               </Tooltip>
                                <Tooltip title={'Edit'} placement={"right-start"}>
                                <ListItemIcon><EditIcon onClick={() => props.open(value.key)}/></ListItemIcon>
                                </Tooltip>
                            </div>
                        </MenuItem>
                    )}
        </div>
        <Dialog/>

    </div>

);

const mapStateToProps = (state) => ({

    userName: state.auth.user.displayName,
    concerts: state.concerts.concerts,
    userUid: state.auth.user.uid
});

const mapDispatchToProps = (dispatch) => ({

    removeConcert: (id) => dispatch(removeConcert(id)),
    logOut: () => dispatch(loggedOut()),
    open: (key) => dispatch(dialogHandler(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)