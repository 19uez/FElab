import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { withRouter } from 'react-router';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
class ManageMemberInHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    goToManage = () => {
        if (this.props.history) {
            this.props.history.push('/system/user-redux')
        }
    }


    render() {
        return (
            <Box>
                <Button
                    sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px', textTransform: 'none', mx: '3px' }}
                    id="basic-button-templates"
                    aria-controls={this.state.open ? 'basic-menu-templates' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    startIcon={<ManageAccountsIcon />}
                    onClick={() => this.goToManage()}
                >
                    Manage Member
                </Button>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageMemberInHeader));



