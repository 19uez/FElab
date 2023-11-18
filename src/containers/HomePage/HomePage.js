import Container from '@mui/material/Container'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Projects from './Section/Projects';
import Box from '@mui/material/Box';
class HomePage extends Component {

    render() {
        return (
            <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
                <HomeHeader />
                <Projects />
                <Box sx={{ height: 300, border: 1, borderColor: 'red' }}>

                </Box>
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
