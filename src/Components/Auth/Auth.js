import React from 'react'
import {connect} from "react-redux";
import LogInByGoogle from './LogInByGoogle'


const Auth = (props)=>(

    <div>
        {
            isUserLoggedIn ?
                props.children
            :
                <LogInByGoogle runLog={props.googleAuth}/>
        }
    </div>

);


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Auth)