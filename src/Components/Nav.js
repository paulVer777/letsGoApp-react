import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'


const Nav = (props) => (
    <div className='nav'>
        <NavLink to={'/'}><Button variant={"outlined"}>Events</Button></NavLink>
        <NavLink to={'/auth'}><Button variant={"outlined"}
        className='mr-3'

        >My account</Button></NavLink>
    </div>
);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
