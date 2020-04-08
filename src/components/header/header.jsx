import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './header.scss'
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            navExpanded:true
        }
    }

    render() {
        const { location } = this.props;
        if (location.pathname.match('/home')) {
            return null;
        }
       
        return (
            <React.Fragment>
                   
                   
            </React.Fragment>

        );
    }
}

export default withRouter(Header);