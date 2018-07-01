import React from 'react'
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';


const Concerts = (props) => (

    <div>
        <hr/>
        <h1 className='concerts__h1 text-center mt-5 mb-5'>Let's Go App</h1>
        <hr/>
        <div className='d'>
            {
                props.concerts.map((value, index) =>

                    <Card className='cardStyle'>
                        <CardMedia
                            image={value.url}
                            className='cardMediaStyle'
                        />
                        <CardContent className='cardParagraphStyle'>
                            <Typography gutterBottom variant="headline" component="h2"
                                        noWrap={true}
                                        color={"primary"}
                            >
                                {value.artist}
                            </Typography>
                            <Typography
                                gutterBottom variant='subheading'
                                noWrap={true}
                            >
                                {value.date}
                            </Typography>
                            <Typography
                                className='cardParagraphStyle'
                                component="p"
                                noWrap={true}

                            >
                                {value.description}
                            </Typography>
                        </CardContent>
                        <CardActions className='icons'>
                            <NavLink to={`details/${index}`}><Button size="small" color="primary">Read more</Button>
                            </NavLink>
                        </CardActions>
                    </Card>
                )
            }
        </div>
    </div>
);
const mapStateToProps = (state) => ({
    concerts: state.concerts.concerts
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Concerts)
