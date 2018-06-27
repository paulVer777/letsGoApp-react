import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
import {loggedOut} from "../state/auth";


const Nav = (props) => (
    <div className='nav'>
        <NavLink to={'/'} activeStyle={{fontWeight: 'bold'}}><Button variant={"outlined"}>Events</Button></NavLink>
        <NavLink to={'/auth'} activeStyle={{fontWeight: 'bold'}}><Button variant={"outlined"}>My account</Button></NavLink>
        <Button
            variant={"outlined"}
            onClick={props.logOut}>Log Out</Button>
    </div>
);


const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({

    logOut:()=>dispatch(loggedOut()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
