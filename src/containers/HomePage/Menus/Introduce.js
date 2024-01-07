import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeHeader from '../../HomePage/HomeHeader';
import { Box, List } from '@mui/material';
// import './DetailProject.scss'
class Introduce extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={false} />
                <Box sx={{ width: '100%', px: '300px' }}>
                    <Box sx={{ fontSize: '32px', fontWeight: 'bolt' }}>
                        The iBME Lab is at the School of Electric and Electronic Engineering and Telecommunications, HUST, Vietnam. The mission of the iBME Lab is to perform innovative research work in the areas of medical data analysis and artificial intelligence. Recently, research has been focused on the followings :
                    </Box>
                    <Box>
                        <List>
                            – apply AI for medical image processing
                            – apply AI for biosinal processing
                            – web and mobile app for healthcare
                            – medical devices for rehabilitation
                        </List>
                    </Box>
                </Box>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Introduce);
