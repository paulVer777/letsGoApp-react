import React from 'react'
import {connect} from "react-redux";
import LogInByGoogle from './LogInByGoogle'
import {logInByGoogle} from "../../state/auth";
import UserAccount from '../UserAccount'


const Auth = (props)=>(

    <div>
        {
            props.isUserLoggedIn ?
              <UserAccount/>
            :
                <LogInByGoogle runLog={props.googleAuth}/>
        }
    </div>

);

const mapStateToProps = (state) => ({

    isUserLoggedIn:state.auth.isUserLoggedIn

});

const mapDispatchToProps = (dispatch) => ({

    googleAuth:()=>dispatch(logInByGoogle())

});

export default connect(mapStateToProps, mapDispatchToProps)(Auth)