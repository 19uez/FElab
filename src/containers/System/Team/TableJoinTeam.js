
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableJoinTeam.scss'
import * as actions from '../../../store/actions'
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip'


class TableJoinTeam extends Component {

    constructor(props) {
        super(props)
        this.state = {
            joinTeamRedux: []
        }
    }
    componentDidMount() {
        this.props.fetchUserOnTeamRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUserOnTeam !== this.props.listUserOnTeam) {
            this.setState({
                joinTeamRedux: this.props.listUserOnTeam
            })
        }

    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id)
    }
    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }

    render() {
        let arrUserOnTeam = this.state.joinTeamRedux
        return (
            <React.Fragment>
                <table id="TableManagerUser">
                    <tbody>
                        <tr>
                            <th>idUser</th>
                            <th>idTeam</th>
                        </tr>

                        {arrUserOnTeam && arrUserOnTeam.length > 0 && arrUserOnTeam.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.idUser}</td>
                                    <td>{item.idTeam}</td>
                                    <td>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                            <Tooltip title='Edit this members' >
                                                <EditIcon
                                                    sx={{
                                                        color: '#F79F1F',
                                                        borderColor: '#F79F1F',
                                                        '&:hover': { borderColor: '#EE5A24' },
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => {
                                                        this.handleEditUser(item)
                                                    }}
                                                />
                                            </Tooltip>
                                            <Tooltip title='Delete this members' >
                                                <DeleteIcon
                                                    sx={{
                                                        color: '#eb2f06',
                                                        borderColor: '#e55039',
                                                        '&:hover': { borderColor: '#b71540' },
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => {
                                                        this.handleDeleteUser(item)
                                                    }}

                                                />
                                            </Tooltip>
                                        </Box>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )


    }

}

const mapStateToProps = state => {
    return {
        listUserOnTeam: state.admin.joinTeams
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserOnTeamRedux: () => dispatch(actions.fetchAllTeamsWUserStart()),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableJoinTeam);


