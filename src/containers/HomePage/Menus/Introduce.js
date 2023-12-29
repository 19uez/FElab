import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeHeader from '../../HomePage/HomeHeader';
// import './DetailProject.scss'
class Introduce extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={false} />
                <div>
                    Chua viet
                </div>
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
