import React from 'react'
import Button from '@material-ui/core/Button';

const LoginByGoogle = (props) => (

    <div>
        <Button variant={"contained"}
                onClick={props.runLog}

        >Login By Google
        </Button>


    </div>
);

export default LoginByGoogle