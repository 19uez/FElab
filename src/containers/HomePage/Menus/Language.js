
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { FormattedMessage } from 'react-intl';
class Language extends Component {

    render() {
        console.log('check props: ', this.props)
        return (
            <Box sx={{
                display: 'flex',
                gap: 1.5,
                color: 'white',
                pl: 2,
                pr: 2,
            }} >
                <GTranslateIcon />
                <Box sx={{ cursor: 'pointer' }}>
                    <Tooltip title='Translate to Vietnamese'>
                        <Typography>
                            VN
                        </Typography>
                    </Tooltip>
                </Box>
                <Box sx={{ cursor: 'pointer' }}>
                    <Tooltip title='Translate to English'>
                        <Typography >
                            EN
                        </Typography>
                    </Tooltip>
                </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Language);
