import React from 'react'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddConcert from './AddConcert'

const UserAccount= (props)=>(

    <div>
   <h1>Konto użytkownika</h1>
        <AddConcert/>
        <hr/>
    </div>

);

const mapStateToProps = (state) => ({



});

const mapDispatchToProps = (dispatch) => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)