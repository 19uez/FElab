import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


class CourseHeader extends Component {
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
    render() {
        return (
            <Box>
                <Button
                    sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px', textTransform: 'none', mx: '3px' }}
                    id="basic-button-templates"
                    aria-controls={this.state.open ? 'basic-menu-templates' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                >
                    Course
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseHeader);



