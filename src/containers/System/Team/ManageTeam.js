import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Redirect, Route, Switch } from 'react-router-dom';
import './ManageTeam.scss'
import { toast } from 'react-toastify'
import * as actions from '../../../store/actions'

import TableManageTeam from './TableManageTeam';
import { CRUD_ACTIONS } from '../../../utils'
import {
    Box,
    TextField,
    Button,
} from '@mui/material';

const statusTeam = [
    {
        value: '1',
        label: 'Active'
    },
    {
        value: '0',
        label: 'No Active'
    },
];

class ManageTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            isActive: '',
            action: '',
            teamEditId: '',

        }
    }
    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listTeams !== this.props.listTeams) {
            this.setState({
                name: '',
                description: '',
                isActive: '',
                action: CRUD_ACTIONS.CREATE,
            })
        }
    }
    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ['name', 'description', 'isActive']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid
    }
    handleOnChangeInput = (event, id) => {
        let stateCopy = { ...this.state }
        stateCopy[id] = event.target.value
        this.setState({
            ...stateCopy
        })
    }
    // handleSaveNewTeam = () => {
    //     let res = createNewTeam(this.state)
    //     if (res && res.errCode === 0) {
    //         toast.success('Add a new team success!')
    //         this.setState({
    //             name: '',
    //             description: '',
    //             isActive: '',
    //         })
    //     } else {
    //         toast.error('Something wrongs ...')
    //         console.log('>> An check res: ', res)
    //     }
    // }
    handleSaveTeam = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return;
        let { action } = this.state
        //fire redux action
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewTeam({
                name: this.state.name,
                description: this.state.description,
                isActive: this.state.isActive,
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editATeamRedux({
                id: this.state.teamEditId,
                name: this.state.name,
                description: this.state.description,
                isActive: this.state.isActive,
            })
        }
    }
    // handleSaveEditNewTeam = async () => {
    //     let res = await editTeam(this.state)
    //     if (res && res.errCode === 0) {
    //         toast.success('Edit a new team success!')
    //         this.setState({
    //             name: '',
    //             description: '',
    //             isActive: '',
    //         })
    //     } else {
    //         toast.error('Something wrongs ...')
    //         console.log('>> An check res: ', res)
    //     }
    // }
    handleEditTeamFromParent = (team) => {
        this.setState({
            teamEditId: team.id,
            name: team.name,
            description: team.description,
            action: CRUD_ACTIONS.EDIT,
            isActive: team.isActive,
        })
    }
    render() {
        console.log('check state', this.state)
        return (
            <div className='manage-team-container'>
                <div className='mp-title'>Quản lý nhóm</div>

                <div className='add-new-team row'>
                    <div className='col-6 form-group'>
                        <label>Tên nhóm</label>
                        <input className='form-control' type='text' value={this.state.name}
                            onChange={(event) => this.handleOnChangeInput(event, 'name')}></input>
                    </div>
                    {/* <div className='col-6 form-group'>
                        <label>Trạng thái hoạt động</label>
                        <input className='form-control' type='text' value={this.state.isActive}
                            onChange={(event) => this.handleOnChangeInput(event, 'isActive')}></input>
                    </div> */}
                    <Box sx={{ marginY: '10px', maxWidth: '50%' }}>
                        <TextField
                            fullWidth
                            label="Status"
                            name="isActive"
                            onChange={(event) => this.handleOnChangeInput(event, "isActive")}
                            required
                            defaultValue='1'
                            select
                            SelectProps={{ native: true }}
                            value={this.state.statusTeam}
                        >
                            {statusTeam.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Box>
                    <div className="col-12">
                        <label>Thông tin nhóm</label>
                        <input className='form-control' type='text' value={this.state.description}
                            onChange={(event) => this.handleOnChangeInput(event, 'description')}></input>

                    </div>
                    <Box sx={{ marginY: '10px' }}>
                        <TableManageTeam handleEditTeamFromParent={this.handleEditTeamFromParent} />
                    </Box>
                    {/* <div className='col-12'>
                        <button className='btn-save-team'
                            onClick={() => this.handleSaveTeam()}
                        >Save</button>
                    </div> */}
                    <Button variant="contained"
                        sx={{
                            mt: '15px',
                            mb: '15px',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            bgcolor: 'rgb(99, 102, 241)',
                            fontSize: '16px',
                            '&:hover': {
                                bgcolor: '#3c40c6'
                            },
                            maxWidth: '50px',
                        }}
                        onClick={() => this.handleSaveTeam()}>
                        Save
                        {/* Save details */}
                    </Button>
                </div>



            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listTeams: state.admin.teams
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewTeam: (data) => dispatch(actions.createNewTeamRedux(data)),
        fetchTeamRedux: () => dispatch(actions.fetchAllTeamsStart()),
        editATeamRedux: (data) => dispatch(actions.editATeam(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTeam);
