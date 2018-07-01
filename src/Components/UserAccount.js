import React from 'react'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import AddConcert from './AddConcert'
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeConcert} from "../state/concerts";
import {loggedOut} from "../state/auth";


const UserAccount = (props) => (

    <div>
        <hr/>
        <h2 className='text-center mb-5 mt-5'>Hello {props.userName} !<Button
            variant={"outlined"}
            onClick={props.logOut}
            className='ml-3'
        >Log Out</Button></h2>
        <hr className='mb-5'/>

        <AddConcert/>

        <hr className='mt-5 mb-3'/>

        <h3 className='mb-5 mt-5 text-center'>Your concerts</h3>

            <div className='addConcert__form'>
                {
                    props.concerts.filter((value, index) => value.id === props.userUid)
                        .map((value, index) =>

                            <MenuItem className='d-flex justify-content-between'>{value.artist} <ListItemIcon>
                                <DeleteIcon onClick={() => props.removeConcert(value.key)}/>
                            </ListItemIcon>
                            </MenuItem>
                        )}
            </div>


    </div>

);

const mapStateToProps = (state) => ({

    userName: state.auth.user.displayName,
    concerts: state.concerts.concerts,
    userUid: state.auth.user.uid
});

const mapDispatchToProps = (dispatch) => ({

    removeConcert: (id) => dispatch(removeConcert(id)),
    logOut: () => dispatch(loggedOut())


});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)