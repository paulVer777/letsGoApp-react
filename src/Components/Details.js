import React from 'react'
import {connect} from 'react-redux'


const Details = (props) => (

    <div>
        <h1>Details</h1>
        {
            props.concerts.filter( (value,index) => index === parseInt(props.match.params.id,10))
                .map(value =>

                    <div>{value.artist}</div>
                )
        }

    </div>
);


const mapStateToProps = (state) => ({

    concerts:state.concerts.concerts

})
const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Details)
