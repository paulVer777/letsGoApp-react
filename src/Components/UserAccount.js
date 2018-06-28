import React from 'react'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddConcert from './AddConcert'
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeConcert} from "../state/concerts";

const UserAccount = (props) => (

    <div>
        <h1 className='text-center mb-5 mt-1'>Hello {props.userName} !</h1>
        <AddConcert/>
        <hr/>
        {
            props.concerts.filter((value, index) => value.id === props.userUid)
                .map((value,index) =>

                        <MenuItem>{value.artist} <ListItemIcon>
                            <DeleteIcon onClick={() => props.removeConcert(value.key)}/>
                        </ListItemIcon>
                        </MenuItem>

                )}
    </div>

);

const mapStateToProps = (state) => ({

    userName: state.auth.user.displayName,
    concerts: state.concerts.concerts,
    userUid: state.auth.user.uid
});

const mapDispatchToProps = (dispatch) => ({

    removeConcert: (id) => dispatch(removeConcert(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)