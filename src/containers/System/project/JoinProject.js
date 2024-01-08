
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './JoinProject.scss'
import * as actions from '../../../store/actions';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select'
// import { getAllUser } from '../../../services/userService';
import { getDetailInforProject, getDetailInforTeam, addUserOnTeam } from '../../../services/userService'
import { CRUD_ACTIONS } from '../../../utils/constant';
import {
    Button
} from '@mui/material';
import { getAllTeamService, getAllUser } from '../../../services/userService';


class JoinProject extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOptionProject: '',
            selectedOptionMember: '',
            listMembers: [],
            listProjects: [],
            // hasOldData: false
        }
    }
    componentDidMount() {
        this.props.fetchProjectRedux()
        this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.listUsers !== this.props.listUsers)) {
            let dataSelectMember = this.buildDataInputSelectMember(this.props.listUsers)
            let dataSelectProject = this.buildDataInputSelectProject(this.props.listProjects)
            this.setState({
                listMembers: dataSelectMember,
                listProjects: dataSelectProject
            })
        }
    }

    handleSaveUserOnProject = () => {
        // let { hasOldData } = this.state
        this.props.saveUserOnProjectRedux({
            // action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
            idProject: this.state.selectedOptionProject.value,
            idUser: this.state.selectedOptionMember.value,
        })
        console.log('check state: ', this.state)
    }
    handleChangeSelectProject = async (selectedOptionProject) => {

        this.setState({ selectedOptionProject })
        let res = await getDetailInforProject(selectedOptionProject.value)
        if (res && res.errCode === 0 && res.data) {
            let Project = res.data.Project
            this.setState({
                // hasOldData: true
            })
        } else {
            this.setState({
                // hasOldData: false
            })
        }
        console.log('selected option: ', res)
    }
    handleChangeSelectMember = async (selectedOptionMember) => {

        this.setState({ selectedOptionMember })
        let res = await getAllUser(selectedOptionMember.value)
        if (res && res.errCode === 0 && res.data) {
            let user = res.data.User
            this.setState({
                // hasOldData: true
            })
        } else {
            this.setState({
                // hasOldData: false
            })
        }
        console.log('selected option: ', res)
    }
    buildDataInputSelectMember = (inputData) => {
        let resultUser = []
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let objectUser = {}
                objectUser.label = `${item.firstName} ${item.lastName}`
                objectUser.value = item.id
                resultUser.push(objectUser)
            })
        }
        return resultUser
    }
    buildDataInputSelectProject = (inputData) => {
        let resultProject = []
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let objectProject = {}
                objectProject.label = `${item.name}`
                objectProject.value = item.id
                resultProject.push(objectProject)
            })
        }
        return resultProject
    }
    render() {
        // let { hasOldData } = this.state
        let arrUsers = this.state.usersRedux
        // console.log('members', this.state)
        return (
            <React.Fragment>
                <div className='manage-user-container'>
                    <div className='manage-user-title'>
                        Thêm thành viên vào dự án
                    </div>
                    <div className='more-infor'>
                        <div className='content-left form-group'>
                            <label>Chọn thành viên</label>
                            <Select
                                value={this.state.selectedOptionMember}
                                onChange={this.handleChangeSelectMember}
                                options={this.state.listMembers}
                            />
                        </div>
                        <div className='content-right'>
                            <label>Chọn dự án</label>
                            <Select
                                value={this.state.selectedOptionProject}
                                onChange={this.handleChangeSelectProject}
                                options={this.state.listProjects}
                            />
                        </div>
                    </div>
                    <div className='manage-user-editor'>
                        <Button variant="contained"
                            sx={{
                                mt: '10px',
                                mb: '10px',
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                bgcolor: 'rgb(99, 102, 241)',
                                fontSize: '16px',
                                '&:hover': {
                                    bgcolor: '#3c40c6'
                                },
                            }}
                            onClick={() => this.handleSaveUserOnProject()}>
                            Save
                            {/* Save details */}
                        </Button>
                    </div>
                </div>

            </React.Fragment>
        )


    }

}

const mapStateToProps = state => {
    return {
        listProjects: state.admin.projects,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjectRedux: () => dispatch(actions.fetchAllProjectsStart()),
        fetchUserRedux: (id) => dispatch(actions.fetchAllUsersStart()),
        saveUserOnProjectRedux: (data) => dispatch(actions.saveUserOnProject(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinProject);


