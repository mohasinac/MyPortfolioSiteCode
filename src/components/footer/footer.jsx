import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'

import './footer.scss'
class Footer extends Component {
    state = {  }
    render() {
        const { location } = this.props;
        if (location.pathname.match('/home')) {
            return null;
        }
        return (
            <React.Fragment></React.Fragment>
        );
    }
}

export default withRouter(Footer) ;