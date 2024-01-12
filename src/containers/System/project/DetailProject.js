
import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailProject.scss';
import { getAllDetailProjectById, getAllCodeService, getMemberOfProject } from '../../../services/userService';
import _ from 'lodash';
import HomeHeader from '../../HomePage/HomeHeader';
import { Divider } from '@mui/material';
import Footer from '../../HomePage/Footer';
import MemberOfProject from './MemberOfProject';

class DetailProject extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            detailProject: {},
            // arrUser: [],
        })
    }
    async componentDidMount() {
        if (this.props.match
            && this.props.match.params
            && this.props.match.params.id) {

            let id = this.props.match.params.id
            let res = await getAllDetailProjectById(id)
            // let resMember = await getMemberOfProject(id)
            if (res && res.errCode === 0) {
                this.setState({
                    detailProject: res.data,
                    // arrUser: resMember.users
                })

            }

        }
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let idP = this.props.match.params.id
        console.log(idP)
        let { detailProject } = this.state
        let nameVi = `${detailProject.name}`
        // let arrMember = this.state
        // let name = `${arr}`
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={false} />
                <div className='project-detail-container'>
                    <div className='project-detail-header'>
                        {nameVi}
                    </div>
                    <Divider sx={{ fontFamily: '', fontSize: '1.5rem', fontWeight: '700', color: '#7f8c8d', marginY: '30px', paddingX: '60px' }}>
                        Thông tin chi tiết
                    </Divider>
                    <div className='project-detail-page'>
                        <div className='project-image'
                            style={{ backgroundImage: `url(${detailProject && detailProject.image ? detailProject.image : ''})` }}
                        >
                        </div>
                        <div className='member-of-project'>

                        </div>
                        <div className='project-infor'>
                            {detailProject && detailProject.descriptionHTML
                                && <div dangerouslySetInnerHTML={{ __html: detailProject.descriptionHTML }}>
                                </div>}
                        </div>
                    </div>
                    <MemberOfProject idP={idP} />
                    <Footer />
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProject);

{/*import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailProject.scss'
class DetailProject extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <HomeHeader isShowBanner={false} />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProject);
*/}