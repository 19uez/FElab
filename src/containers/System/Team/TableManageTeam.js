
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableManageTeam.scss'
import * as actions from '../../../store/actions'
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import _ from 'lodash';
import Tooltip from '@mui/material/Tooltip'
import { getAllTeamService, deleteTeam, editTeam } from '../../../services/userService';

class TableManageTeam extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            isActive: '',
            teamsLab: []
        }
    }
    // async componentDidMount() {
    //     await this.getAllTeamFormReact()
    //     // let team = this.props.currentTeam
    //     // if (team && !_.isEmpty(team)) {
    //     //     this.setState({
    //     //         id: team.id,
    //     //         name: team.name,
    //     //         description: team.description,
    //     //         isActive: team.isActive,
    //     //     })
    //     // }
    //     // console.log('didmount edit modal', this.props.currentTeam)

    // }
    componentDidMount() {
        this.props.fetchTeamRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listTeams !== this.props.listTeams) {
            this.setState({
                teamsLab: this.props.listTeams
            })
        }

    }
    // handleChange = (event) => {
    //     this.setState((prevState) => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value
    //     }));

    // }
    // handleOnChangeAddTeam = (event, id) => {

    //     let copyState = { ...this.state }
    //     copyState[id] = event.target.value
    //     this.setState({
    //         ...copyState
    //     })

    // }
    // getAllTeamFormReact = async () => {
    //     let response = await getAllTeamService('All')
    //     if (response && response.errCode === 0) {
    //         //setState la ham bat dong bo
    //         this.setState({
    //             teamsLab: response.teams,
    //         })
    //     }
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.teamsLab !== this.props.teamsLab) {
    //         this.setState({
    //             teamsLab: this.props.teamsLab
    //         })
    //     }

    // }
    // handleDeleteTeam = async (team) => {
    //     try {
    //         let res = await deleteTeam(team.id)
    //         if (res && res.errCode === 0) {
    //             await this.getAllTeamFormReact()
    //         } else {
    //             alert(res.errMessage)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    handleDeleteTeam = (team) => {
        this.props.deleteATeamRedux(team.id)
    }
    handleEditTeam = (team) => {
        this.props.handleEditTeamFromParent(team)
    }

    render() {
        let teamsLab = this.state.teamsLab
        return (
            <React.Fragment>
                <table id="TableManagerUser">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>

                        {teamsLab && teamsLab.length > 0 && teamsLab.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.isActive}</td>
                                    <td>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                            <Tooltip title='Edit this team' >
                                                <EditIcon
                                                    sx={{
                                                        color: '#F79F1F',
                                                        borderColor: '#F79F1F',
                                                        '&:hover': { borderColor: '#EE5A24' },
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => {
                                                        this.handleEditTeam(item)
                                                    }}
                                                />
                                            </Tooltip>
                                            <Tooltip title='Delete this team' >
                                                <DeleteIcon
                                                    sx={{
                                                        color: '#eb2f06',
                                                        borderColor: '#e55039',
                                                        '&:hover': { borderColor: '#b71540' },
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => {
                                                        this.handleDeleteTeam(item)
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
        listTeams: state.admin.teams
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeamRedux: () => dispatch(actions.fetchAllTeamsStart()),
        deleteATeamRedux: (id) => dispatch(actions.deleteATeam(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageTeam);


