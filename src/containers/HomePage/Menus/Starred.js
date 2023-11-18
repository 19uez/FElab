import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'


import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Check from '@mui/icons-material/Check'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



class Starred extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false,
        }

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
    render() {

        return (

            < Box >
                <Button
                    sx={{ color: 'white' }}
                    id="basic-button-starred"
                    aria-controls={this.state.open ? 'basic-menu-starred' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    onClick={(event) => this.handleClick(event)}
                    endIcon={<ExpandMoreIcon />}

                >
                    Starred
                </Button>
                <Menu
                    id="basic-menu-starred"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-starred'
                    }}
                >
                    <MenuItem>
                        <ListItemText inset><FormattedMessage id="homeheader.single" /></ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset>1.15</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset><FormattedMessage id="homeheader.double" /></ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Check />
                        </ListItemIcon>
                        Custom: 1.2
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>Add space before paragraph</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText>Add space after paragraph</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>Custom spacing...</ListItemText>
                    </MenuItem>
                </Menu>
            </Box >
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

export default connect(mapStateToProps, mapDispatchToProps)(Starred);