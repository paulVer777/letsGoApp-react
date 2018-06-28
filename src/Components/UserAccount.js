import React from 'react'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddConcert from './AddConcert'

const UserAccount= (props)=>(

    <div>
   <h1 className='text-center mb-5 mt-1'>Hello {props.userName} !</h1>
        <AddConcert/>
        <hr/>
    </div>

);

const mapStateToProps = (state) => ({

userName:state.auth.user.displayName

});

const mapDispatchToProps = (dispatch) => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)