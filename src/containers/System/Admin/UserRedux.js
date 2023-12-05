import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import { getAllCodeService } from '../../../services/userService'
import { LANGUAGES, CRUD_ACTIONS } from '../../../utils'

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

const sexs = [
    {
        value: 'M',
        label: 'Nam'
    },
    {
        value: 'F',
        label: 'Nữ'
    },
    {
        value: 'O',
        label: 'Khác'
    },
];
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
            role: 'user',
            phone: '',
            sex: 'M',
            isActive: '1',
            // showPassword: false,



            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImgURL: '',
            isOpen: false,

            action: '',
            userEditId: '',
        }

    }
    handleChange = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

    }


    handleSubmit = (event) => {
        event.preventDefault();
    }
    handleClickShowPassword = (event) => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    // handleClickShowPassword = () => this.setShowPassword((show) => !show);

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async componentDidMount() {
        // try {
        //     let res = await getAllCodeService('gender')
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log('check res: ', res)
        // } catch (e) {
        //     console.log(e)
        // }
        this.props.getGenderStart();
        this.props.getPositionStart()
        this.props.getRoleStart()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux
            let arrRoles = this.props.roleRedux
            let arrPositions = this.props.positionRedux
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: 'user',
                phone: '',
                sex: 'M',
                isActive: '1',
                action: CRUD_ACTIONS.CREATE
            })
        }
    }
    handleOnChangeImage = (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl
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
        })
    }
    render() {
        console.log('check state: ', this.state)
        let genders = this.state.genderArr;
        let roles = this.state.roleArr
        let positions = this.state.positionArr
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender
        // console.log('check props from redux', this.props.genderRedux);
        return (
            < div className='user-redux-container' >
                <div className="title" >
                    Manage user with redux
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
                                                        onChange={(event) => this.handleChange(event)}
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
                                                        onChange={(event) => this.handleChange(event)}
                                                        type="password"
                                                        autoComplete="current-password"
                                                        required
                                                        value={this.state.password}
                                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                                    />


                                                    {/* <FormControl fullWidth required sx={{}} variant="outlined" >
                                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-password"
                                                            type={this.state.showPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={(event) => this.handleClickShowPassword(event)}
                                                                        onMouseDown={(event) => this.handleMouseDownPassword(event)}
                                                                        edge="end"
                                                                    >
                                                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                            label="Password"
                                                            onChange={(event) => this.handleChange(event)}
                                                            value={this.state.password}
                                                        />
                                                    </FormControl> */}
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
                                                        onChange={(event) => this.handleChange(event)}
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
                                                        onChange={(event) => this.handleChange(event)}
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
                                                        onChange={(event) => this.handleChange(event)}
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
                                                        onChange={(event) => this.handleChange(event)}
                                                        required
                                                        defaultValue='user'
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
                                                        name="status"
                                                        onChange={(event) => this.handleChange(event)}
                                                        required
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
                                                <Grid
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
                                                </Grid>

                                                {/* <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        label="Positions"
                                                        name="position"
                                                        onChange={(event) => this.handleChange(event)}
                                                        required
                                                        select
                                                        SelectProps={{ native: true }}
                                                        value={positions}
                                                    >
                                                        {positions.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                </Grid> */}


                                                {/* <Grid
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <Box
                                                        sx={{ width: '20px' }}
                                                    // fullWidth
                                                    // label="Role"
                                                    // name="role"
                                                    // onChange={(event) => this.handleChange(event)}
                                                    // required
                                                    // select
                                                    // SelectProps={{ native: true }}
                                                    // value={this.state.sexs}
                                                    >
                                                        <select >
                                                            {roles && roles.length > 0 &&
                                                                roles.map((item, index) => {
                                                                    return (
                                                                        <option key={index}>{item.valueVi}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </Box>
                                                </Grid> */}

                                                {/* 
                                                <div

                                                >
                                                    <div
                                                    >
                                                        <input id='previewImg' type='file' hidden
                                                            onChange={(event) => this.handleOnChangeImage(event)}
                                                        >
                                                            <label className='label-upload' htmlFor='previewImg'> Tai anh <i className='fas fa-upload' /></label>
                                                            <div className='preview-image'
                                                                style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                                                onClick={() => this.openPreviewImage()}
                                                            >

                                                            </div>
                                                        </input>
                                                    </div>
                                                </div> */}

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
                                            {this.state.action === CRUD_ACTIONS.EDIT ? 'Save details' : 'Edit user'}
                                            {/* Save details */}
                                        </Button>
                                    </CardActions>
                                    <Divider sx={{ my: '1.2rem' }} />
                                    <Box >
                                        <TableManageUser
                                            handleEditUserFromParentKey={this.handleEditUserFromParent} />
                                    </Box>
                                </Card>
                            </form>
                        </div>
                    </div>
                </div>

                {/* {this.state.isOpen === true && <Lightbox mainSrc={this.state.previewImgURL}
                    onCloseRequest={() => this.setState({ isOpen: false })} />} */}
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
