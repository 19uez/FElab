import Container from '@mui/material/Container'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
class HomePage extends Component {

    render() {
        return (
            <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
                <HomeHeader />
                {/* <HomeBanner /> */}
            </Container >
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
