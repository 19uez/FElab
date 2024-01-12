
import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './MemberOfProject.scss';
import { getMemberOfProject } from '../../../services/userService';
import _ from 'lodash';
import HomeHeader from '../../HomePage/HomeHeader';
import { Divider } from '@mui/material';

class MemberOfProject extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            arrUser: {},
        })
    }
    async componentDidMount() {
        let idP = this.props.idP;
        if (true) {
            let res = await getMemberOfProject(idP)
            if (res && res.errCode === 0) {
                this.setState({
                    arrUser: res.users
                })

            }

        }
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        console.log('state: ', this.state.id)
        let arrMember = this.state.arrUser
        console.log('arr: ', arrMember)
        return (

            <React.Fragment>
                <Divider sx={{ fontFamily: '', fontSize: '1.5rem', fontWeight: '700', color: '#7f8c8d', marginY: '30px', paddingX: '60px' }}>
                    Thành viên trong Project
                </Divider>
                <table id="TableManagerUser">
                    <tbody>
                        <tr>
                            <th>Name Member</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        {arrMember && arrMember.length > 0 && arrMember.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                {/* </div> */}

            </React.Fragment>
        );
    }


}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberOfProject);