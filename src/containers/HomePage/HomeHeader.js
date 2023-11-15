import React, { Component } from 'react';
import { connect } from 'react-redux';


import AppsIcon from '@mui/icons-material/Apps'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Profiles from './Menus/Profiles'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import './HomeHeader.scss'
import Language from './Menus/Language';
class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
        }
    }
    handleOnChangeSearch = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }
    handleResult = () => {
        this.setState({
            searchValue: ''
        });
    }
    render() {
        return (
            <React.Fragment>
                <Box px={2} sx={{
                    width: '100%',
                    height: '60px',
                    display: 'plex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    overflowX: 'auto',
                    bgcolor: '#1565c0',
                    '&::-webkit-scrollbar': {
                        width: '10px',
                        height: '10px'
                    },

                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#fafafa'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ced0da',
                        borderRadius: '8px'
                    },
                    '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <AppsIcon sx={{ color: 'white', cursor: 'pointer' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>

                            <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                                Trello
                            </Typography>

                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            <Workspace />
                            <Recent />
                            <Starred />
                            <Templates />
                            <Button
                                sx={{ color: 'white' }}
                                startIcon={<LibraryAddIcon />}
                            >
                                Creat
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField
                            id="outlined-search"
                            label="Search..."
                            type="text"
                            size='small'
                            value={this.state.searchValue}
                            onChange={(event) => this.handleOnChangeSearch(event)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <ClearIcon
                                        fontSize='small'
                                        sx={{ color: this.state.searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                                        onClick={() => this.handleResult()}
                                    />
                                )
                            }}
                            sx={{
                                minWidth: '120px',
                                maxWidth: '170px',
                                '& label': { color: 'white' },
                                '& input': { color: 'white' },
                                '& label.Mui-focused': { color: 'white' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'white' },
                                    '&:hover fieldset': { borderColor: 'white' },
                                    '&.Mui-focused fieldset': { borderColor: 'white' }
                                }
                            }} />
                        <Language />
                        <Tooltip title="Notifications">
                            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
                                <NotificationsNoneIcon sx={{ color: 'white' }} />
                            </Badge>
                        </Tooltip>

                        <Tooltip title="Help">
                            <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
                        </Tooltip>

                        <Profiles />
                    </Box>

                </Box >
                <Box sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '485px',
                }}>

                </Box>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
