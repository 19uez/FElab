
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './JoinProject.scss'
import * as actions from '../../../store/actions';

import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select'
// import { getAllUser } from '../../../services/userService';
import { getDetailInforMember } from '../../../services/userService'
import { CRUD_ACTIONS } from '../../../utils/constant';
import {
    Button
} from '@mui/material';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class JoinProject extends Component {

    constructor(props) {
        super(props)
        this.state = {

            selectedOption: '',
            description: '',
            listMembers: [],
            hasOldData: false
        }
    }
    componentDidMount() {
        this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            let dataSelect = this.buildDataInputSelect(this.props.listUsers)
            this.setState({
                listMembers: dataSelect
            })
        }
    }

    handleSaveContentMarkdown = () => {
        let { hasOldData } = this.state
        this.props.saveDetailMember({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,

            userId: this.state.selectedOption.value,

        })
        // console.log('check state: ', this.state)
    }
    handleChangeSelect = async (selectedOption) => {

        this.setState({ selectedOption })
        let res = await getDetailInforMember(selectedOption.value)
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
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
    handleOnChangeDesc = (event) => {
        this.setState({ description: event.target.value })
    }
    buildDataInputSelect = (inputData) => {
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
                                value={this.state.selectedOption}
                                onChange={this.handleChangeSelect}
                                options={this.state.listMembers}
                            />
                        </div>
                        <div className='content-right'>
                            <label>Giới thiệu</label>
                            <textarea className='form-control' rows='4'
                                onChange={(event) => this.handleOnChangeDesc(event)}
                                value={this.state.description}
                            >

                            </textarea>
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
                            onClick={() => this.handleSaveContentMarkdown()}>
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
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: (id) => dispatch(actions.fetchAllUsersStart()),
        saveDetailMember: (data) => dispatch(actions.saveDetailMember(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinProject);


