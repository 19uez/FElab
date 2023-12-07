
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManagerUser.scss'
import * as actions from '../../../store/actions';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select'

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManagerUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contentHTML: '',
            contentMarkdown: '',
            selectedOption: '',
            description: '',
            listMembers: [],
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

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentHTML: html,
            contentMarkdown: text,
        })
    }
    handleSaveContentMarkdown = () => {
        this.props.saveDetailMember({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            userId: this.state.selectedOption.value,
        })
        console.log('check state: ', this.state)
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption })
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
        let arrUsers = this.state.usersRedux
        console.log('members', this.state)
        return (
            <React.Fragment>
                <div className='manage-user-container'>
                    <div className='manage-user-title'>
                        Tao them thong tin thanh vien
                    </div>
                    <div className='more-infor'>
                        <div className='content-left form-group'>
                            <label>Chon thanh vien</label>
                            <Select
                                value={this.state.selectedOption}
                                onChange={this.handleChange}
                                options={this.state.listMembers}
                            />
                        </div>
                        <div className='content-right'>
                            <label>Thong tin gioi thieu</label>
                            <textarea className='form-control' rows='4'
                                onChange={(event) => this.handleOnChangeDesc(event)}
                                value={this.state.description}
                            >
                                adsdadasdasd
                            </textarea>
                        </div>
                    </div>
                    <div className='manage-user-editor'>
                        <MdEditor
                            style={{ height: '500px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                        />
                        <button onClick={() => this.handleSaveContentMarkdown()}
                            className='save-content-user'
                        >
                            Luu thong tin
                        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerUser);


