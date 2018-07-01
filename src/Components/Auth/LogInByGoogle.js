import React from 'react'
import Button from '@material-ui/core/Button';

const LoginByGoogle = (props) => (

    <div>
        <div className='text-center mt-5 loginByGoogle_button'>
            <Button variant={"contained"}
                    onClick={props.runLog}
                    className='w-50'
                    color={"secondary"}
            >Login By Google
            </Button>

        </div>
    </div>
);

export default LoginByGoogle