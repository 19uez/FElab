import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Divider from '@mui/material/Divider'
import Cloud from '@mui/icons-material/Cloud'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



class Workspace extends Component {
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
            <Box>
                <Button
                    sx={{ color: 'white' }}
                    id="basic-button-workspaces"
                    aria-controls={this.state.open ? 'basic-menu-workspaces' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    onClick={(event) => this.handleClick(event)}
                    endIcon={<ExpandMoreIcon />}
                >
                    WorkSpaces
                </Button>
                <Menu
                    id="basic-menu-workspaces"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-workspaces'
                    }}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Cut</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘X
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCopy fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Copy</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘C
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentPaste fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Paste</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘V
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Web Clipboard</ListItemText>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
