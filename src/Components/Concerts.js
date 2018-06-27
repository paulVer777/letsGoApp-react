import React from 'react'
import {connect} from 'react-redux'


const Concerts = (props) => (

    <div>

        {
           props.concerts.map(value =>


               <img src={value.url} width='100px' height='100px'/>

           )



        }


    </div>
);
const mapStateToProps = (state) => ({

    concerts:state.concerts.concerts
});
const mapDispatchToProps = (dispatch) => ({



})


export default connect(mapStateToProps, mapDispatchToProps)(Concerts)
