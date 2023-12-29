
import React, { Component } from 'react';
import { connect } from 'react-redux';


import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import * as actions from '../../../store/actions'
import LogoutIcon from '@mui/icons-material/Logout';

import { withRouter } from 'react-router';

class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            anchorEl: null,
            open: false,
        })

    }
    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            open: true,
        })
    }
    handleClose = () => {
        this.setState({
            anchorEl: null,
            open: false,
        })
    }
    returnLogin = () => {
        if (this.props.history) {
            this.props.history.push('/login')
        }
    }
    render() {
        const { processLogout, isLoggedIn } = this.props;
        return (
            <Box>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={(event) => this.handleClick(event)}
                        size="small"
                        sx={{ padding: 0 }}
                        aria-controls={this.state.open ? 'basic-menu-profiles' : undefined}
                        aria-haspopup="true"
                        aria-expanded={this.state.open ? 'true' : undefined}
                    >
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            alt='CQLA Lab'
                            // style={{ backgroundImage: `url(${detailMember && detailMember.image ? detailMember.image : ''})` }}
                            src='https://avatars.githubusercontent.com/u/134493391?v=4'
                        />
                    </IconButton>
                </Tooltip>


                <Menu
                    id="basic-menu-profiles"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-profiles'
                    }}
                >
                    <MenuItem >
                        <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
                    </MenuItem>
                    <MenuItem >
                        <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem >
                        <ListItemIcon>
                            <LogoutIcon onClick={processLogout} sx={{ color: 'white', cursor: 'pointer' }} fontSize="small" />
                            {isLoggedIn === false && this.returnLogin()}
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
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
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profiles));



