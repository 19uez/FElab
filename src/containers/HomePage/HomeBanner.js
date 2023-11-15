
import React, { Component } from 'react';
import { connect } from 'react-redux';
class HomeBanner extends Component {

    render() {
        return (
            <div className='home-header-banner' >
                <div className='1'></div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);
