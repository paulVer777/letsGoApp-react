import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

const Nav = () => (
    <div className='nav'>
        <NavLink to={'/'} activeStyle={{fontWeight: 'bold'}}><Button variant={"outlined"}>Events</Button></NavLink>
        <NavLink to={'/log'} activeStyle={{fontWeight: 'bold'}}><Button variant={"outlined"}>Log in</Button></NavLink>
        <NavLink to={'/addConcert'} activeStyle={{fontWeight: 'bold'}}><Button variant={"outlined"}>add concert</Button></NavLink>
    </div>
)


const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Nav)
