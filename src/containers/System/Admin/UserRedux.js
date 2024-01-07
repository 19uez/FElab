import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


// import { getAllCodeService } from '../../../services/userService'
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils'

import './UserRedux.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import * as actions from '../../../store/actions'
import TableManageUser from './TableManageUser';



import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Unstable_Grid2 as Grid
} from '@mui/material';

const statusUser = [
    {
        value: '1',
        label: 'Active'
    },
    {
        value: '0',
        label: 'Retire'
    },
];
const roleLab = [
    {
        value: 'admin',
        label: 'Quản lý'
    },
    {
        value: 'user',
        label: 'Nhân viên'
    },
];
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: '',
            phone: '',
            isActive: '',
            previewImgURL: '',
            isOpen: false,

            action: '',
            userEditId: '',
        }

    }
    // handleChange = (event) => {
    //     this.setState((prevState) => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value
    //     }));

    // }
    handleChange = (event, id) => {
        let stateCopy = { ...this.state }
        stateCopy[id] = event.target.value
        this.setState({
            ...stateCopy
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
    }


    async componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: '',
                phone: '',
                sex: '',
                isActive: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: ''
            })
        }
    }
    handleOnChangeImage = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64
            })
        }
    }
    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return;
        let { action } = this.state
        //fire redux action
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                role: this.state.role,
                isActive: this.state.isActive,
                password: this.state.password,
                deleteAt: this.state.deleteAt,
                avatar: this.state.avatar,
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editAUserRedux({
                id: this.state.userEditId,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                role: this.state.role,
                isActive: this.state.isActive,
                password: this.state.password,
                deleteAt: this.state.deleteAt,
                avatar: this.state.avatar,
            })
        }
    }
    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phone']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid
    }
    handleEditUserFromParent = (user) => {
        let imageBase64 = ''
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary')
        }
        this.setState({
            userEditId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            role: user.role,
            isActive: user.isActive,
            password: 'HARDCODE',
            deleteAt: user.deleteAt,
            action: CRUD_ACTIONS.EDIT,
            previewImgURL: imageBase64,
        })
    }
    render() {
        return (
            < div className='user-redux-container' >
                <div className="title" >
                    Manage Member
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <form
                                autoComplete="off"
                                noValidate
                                onSubmit={() => this.handleSubmit()}
                            >
                                <Card>
                                    <CardHeader
                                        subheader="The information can be edited"
                                        title="Profile"
                                    />
                                    <CardContent sx={{ pt: 0 }}>
                                        <Box sx={{ m: -1.5 }}>
                                            <Grid
                                                container
                                                spacing={3}
                                            >
                                                {/*email*/}
                                                <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Email Address"
                                                        name="email"
                                                        onChange={(event) => this.handleChange(event, 'email')}
                                                        required
                                                        value={this.state.email}
                                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                                    />
                                                </Grid>
                                                {/*password*/}
                                                <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Password"
                                                        name="password"
                                                        onChange={(event) => this.handleChange(event, 'password')}
                                                        type="password"
                                                        autoComplete="current-password"
                                                        required
                                                        value={this.state.password}
                                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                                    />
                                                </Grid>
                                                {/*firstName*/}
                                                <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        // helperText="Please specify the first name"
                                                        label="First name"
                                                        name="firstName"
                                                        onChange={(event) => this.handleChange(event, 'firstName')}
                                                        required
                                                        value={this.state.firstName}
                                                    />
                                                </Grid>
                                                {/*lastName*/}
                                                <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Last name"
                                                        name="lastName"
                                                        onChange={(event) => this.handleChange(event, 'lastName')}
                                                        required
                                                        value={this.state.lastName}
                                                    />
                                                </Grid>
                                                {/*phone*/}
                                                <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Phone Number"
                                                        name="phone"
                                                        onChange={(event) => this.handleChange(event, 'phone')}
                                                        type="text"
                                                        value={this.state.phone}
                                                    />
                                                </Grid>
                                                {/*role*/}
                                                <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Role"
                                                        name="role"
                                                        onChange={(event) => this.handleChange(event, 'role')}
                                                        required
                                                        defaultValue='R1'
                                                        select
                                                        SelectProps={{ native: true }}
                                                        value={this.state.roleLab}
                                                    >
                                                        {roleLab.map((option) => (
                                                            <option
                                                                key={option.value}
                                                                value={option.value}
                                                            >
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                {/*status*/}
                                                <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Status"
                                                        name="isActive"
                                                        onChange={(event) => this.handleChange(event, 'isActive')}
                                                        required
                                                        defaultValue='1'
                                                        select
                                                        SelectProps={{ native: true }}
                                                        value={this.state.statusUser}
                                                    >
                                                        {statusUser.map((option) => (
                                                            <option
                                                                key={option.value}
                                                                value={option.value}
                                                            >
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                {/*gender*/}
                                                {/* <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Select Gender"
                                                        name="sex"
                                                        onChange={(event) => this.handleChange(event)}
                                                        required
                                                        select
                                                        SelectProps={{ native: true }}
                                                        value={this.state.sexs}
                                                    >
                                                        {sexs.map((option) => (
                                                            <option
                                                                key={option.value}
                                                                value={option.value}
                                                            >
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid> */}
                                                <Grid xs={12} md={2}>
                                                    <div>
                                                        <input
                                                            id='previewImg'
                                                            type='file'
                                                            hidden
                                                            onChange={(event) => this.handleOnChangeImage(event)}
                                                        />
                                                        <label className='label-upload' htmlFor='previewImg'>
                                                            Tải ảnh <i className='fas fa-upload' />
                                                        </label>
                                                        <div
                                                            className='preview-image'
                                                            style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                                            onClick={() => this.openPreviewImage()}
                                                        >
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </CardContent>
                                    <Divider sx={{ my: '1.2rem' }} />
                                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                                        <Button variant="contained"
                                            sx={{
                                                borderRadius: '12px',
                                                textTransform: 'none',
                                                fontWeight: 'bold',
                                                bgcolor: 'rgb(99, 102, 241)',
                                                fontSize: '16px',
                                                '&:hover': {
                                                    bgcolor: '#3c40c6'
                                                }
                                            }}
                                            onClick={() => this.handleSaveUser()}>
                                            {this.state.action === CRUD_ACTIONS.EDIT ? 'Save' : 'Save'}
                                            {/* Save details */}
                                        </Button>
                                    </CardActions>
                                    <Divider sx={{ my: '1.2rem' }} />
                                    <Box sx={{ height: '330px' }}>
                                        <TableManageUser
                                            handleEditUserFromParentKey={this.handleEditUserFromParent} />
                                    </Box>
                                </Card>
                            </form>
                        </div>
                    </div>
                </div>

                {this.state.isOpen === true && <Lightbox mainSrc={this.state.previewImgURL}
                    onCloseRequest={() => this.setState({ isOpen: false })} />}
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        editAUserRedux: (data) => dispatch(actions.editAUser(data)),
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
