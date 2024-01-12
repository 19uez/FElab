
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableJoinTeam.scss'
import * as actions from '../../../store/actions'
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip'
import { getMemberOfTeam } from '../../../services/userService';

class TableJoinTeam extends Component {

    constructor(props) {
        super(props)
        this.state = {
            joinTeamRedux: [],
            joinTeamMember: [],
        }
    }
    async componentDidMount() {
        await this.getAllUserOfTeamFormReact()
    }
    getAllUserOfTeamFormReact = async () => {
        let idM = this.props.idM;
        let response = await getMemberOfTeam(idM)
        if (response && response.errCode === 0) {
            //setState la ham bat dong bo
            this.setState({
                joinTeamMember: response.users,
            })
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUserOnTeam !== this.props.listUserOnTeam) {
            this.setState({
                joinTeamRedux: this.props.listUserOnTeam
            })
        }

    }

    render() {
        let arrUserOnTeam = this.state.joinTeamMember
        console.log('check arr: ', arrUserOnTeam)
        return (
            <React.Fragment>
                <table id="TableManagerUser">
                    <tbody>
                        <tr>
                            <th>Name Member</th>
                            <th>Name Team</th>
                            <th>Actions</th>
                        </tr>

                        {arrUserOnTeam && arrUserOnTeam.length > 0 && arrUserOnTeam.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.lastName}</td>
                                    <td>{'Nhóm 3'}</td>
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
                                                // onClick={() => {
                                                //     this.handleEditUser(item)
                                                // }}
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
                                                // onClick={() => {
                                                //     this.handleDeleteUser(item)
                                                // }}

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


