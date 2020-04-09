import React, { Component } from 'react';
import './home.scss'
import { NavLink } from 'react-router-dom'
import Background from './../../components/background/background'
import {Typography , Card, Grid} from '@material-ui/core'

class Home extends Component {
    state = {}
    render() {
        this.btnText = 'Pause'
        this.btnClicked =()=>{
            this.btnText='Play'
        }

        return (
            <React.Fragment>
                <Grid className="capsule" justify="center" align-items="center">
                    <Background id="background" />
                    <Grid item xs as="main" lg={6}  id="home" className="centered ">
                        
                        <Typography component="h1" variant="h2"  align="center">
                            <span className="hii" >Hii!</span> 
                            <br/>
                             I am <span className="surname"><b>Mohasin Chinnapattan</b></span>,
                        </Typography >
                        <Typography component="h2" variant="h3" align="center">
                            Specialist Programmer and Developer
                         </Typography >
                        <Typography as="p" variant="body1" align="center">
                            Welcome to my Website!
                        </Typography>
                        
                    </Grid>
                </Grid>

            </React.Fragment>

        );
    }
}

export default Home;
