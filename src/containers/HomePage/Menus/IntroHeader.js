import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { withRouter } from 'react-router';


class IntroHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }


    handleClick = (event) => {
        this.setState({

        })
    }
    handleClose = () => {
        this.setState({

        })
    }
    toIntroduce = () => {
        if (this.props.history) {
            this.props.history.push('/introduce')
        }
    }
    render() {
        return (
            <Box>
                <Button
                    sx={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}
                    id="basic-button-workspaces"
                    aria-controls={this.state.open ? 'basic-menu-workspaces' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    onClick={() => this.toIntroduce()}
                >
                    Introduction
                </Button>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IntroHeader));
