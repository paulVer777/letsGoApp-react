import React from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';

const Details = (props) => (

    <div>

        {
            props.concerts.filter((value, index) => index === parseInt(props.match.params.id, 10))
                .map(value =>

                    <div className='mt-5'>
                        <div className='d-flex justify-content-center'>
                            <img src={value.url} className='mb-5' width='300' height='200'/>
                        </div>
                        <Paper className='pl-2'>
                            <p><strong>Artist</strong>: {value.artist}</p>
                        </Paper>
                        <Paper className='pl-2'>
                            <p><strong>City:</strong> {value.city}</p>
                        </Paper>
                        <Paper className='pl-2'>
                            <p><strong>Date:</strong> {value.date}</p>
                        </Paper>
                        <Paper className='pl-2'>
                            <p><strong>Price:</strong> {value.price}</p>
                        </Paper>
                        <Paper className='p-2'>
                            <p> {value.description}</p>
                        </Paper>
                    </div>
                )
        }
    </div>
);
const mapStateToProps = (state) => ({
    concerts: state.concerts.concerts
});
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
