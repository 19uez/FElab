
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './JoinTeam.scss'
import * as actions from '../../../store/actions';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select'
// import { getAllUser } from '../../../services/userService';
import { getDetailInforMember, getDetailInforTeam, addUserOnTeam } from '../../../services/userService'
import { CRUD_ACTIONS } from '../../../utils/constant';
import {
    Button
} from '@mui/material';
import { getAllTeamService } from '../../../services/userService';


class JoinTeam extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOptionTeam: '',
            selectedOptionMember: '',
            listMembers: [],
            listTeams: [],
            hasOldData: false
        }
    }
    componentDidMount() {
        this.props.fetchTeamRedux()
        this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.listUsers !== this.props.listUsers) && (prevProps.listTeams !== this.props.listTeams)) {
            let dataSelectMember = this.buildDataInputSelectMember(this.props.listUsers)
            let dataSelectTeam = this.buildDataInputSelectTeam(this.props.listTeams)
            this.setState({
                listMembers: dataSelectMember,
                listTeams: dataSelectTeam
            })
        }
    }

    handleSaveUserOnTeam = () => {
        let { hasOldData } = this.state
        this.props.saveUserOnTeam({
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
            teamId: this.state.selectedOptionTeam.value,
            userId: this.state.selectedOptionMember.value,
        })
        // console.log('check state: ', this.state)
    }
    handleChangeSelectTeam = async (selectedOptionTeam) => {

        this.setState({ selectedOptionTeam })
        let res = await getDetailInforTeam(selectedOptionTeam.value)
        if (res && res.errCode === 0 && res.data) {
            this.setState({
                hasOldData: true
            })
        } else {
            this.setState({
                hasOldData: false
            })
        }
        console.log('selected option: ', res)
    }
    handleChangeSelectMember = async (selectedOptionMember) => {

        this.setState({ selectedOptionMember })
        let res = await getDetailInforMember(selectedOptionMember.value)
        if (res && res.errCode === 0 && res.data) {
            this.setState({
                hasOldData: true
            })
        } else {
            this.setState({
                hasOldData: false
            })
        }
        console.log('selected option: ', res)
    }
    buildDataInputSelectMember = (inputData) => {
        let result = []
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {}
                object.label = `${item.firstName} ${item.lastName}`
                object.value = item.id
                result.push(object)
            })
        }
        return result
    }
    buildDataInputSelectTeam = (inputData) => {
        let result = []
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {}
                object.label = `${item.name}`
                object.value = item.id
                result.push(object)
            })
        }
        return result
    }
    render() {
        let { hasOldData } = this.state
        let arrUsers = this.state.usersRedux
        // console.log('members', this.state)
        return (
            <React.Fragment>
                <div className='manage-user-container'>
                    <div className='manage-user-title'>
                        Thêm thành viên vào nhóm
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
                            <label>Chọn nhóm</label>
                            <Select
                                value={this.state.selectedOptionTeam}
                                onChange={this.handleChangeSelectTeam}
                                options={this.state.listTeams}
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
                            onClick={() => this.handleSaveUserOnTeam()}>
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
        listTeams: state.admin.teams,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeamRedux: () => dispatch(actions.fetchAllTeamsStart()),
        deleteATeamRedux: (id) => dispatch(actions.deleteATeam(id)),
        fetchUserRedux: (id) => dispatch(actions.fetchAllUsersStart()),
        saveUserOnTeam: (data) => dispatch(actions.saveUserOnTeam(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinTeam);


