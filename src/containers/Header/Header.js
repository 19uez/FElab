import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import Language from '../HomePage/Menus/Language';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
class Header extends Component {

    render() {
        const { processLogout, userInfo } = this.props;
        console.log('check  user info: ', userInfo)
        return (
            <div className="header-container">

                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ paddingTop: '10px', display: 'flex' }}>
                        <Typography sx={{ mr: '10px' }}>
                            <FormattedMessage id="homeheader.welcome" />, {userInfo && userInfo.firstName ? userInfo.firstName : ''} !
                        </Typography>
                        <Language />
                    </Box>
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </Box>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
