
import { EnergySavingsLeaf } from '@mui/icons-material';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            role: '',
            statusM: '',
        }
    }

    componentDidMount() {


    }
    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnChangeAddUser = (event, id) => {
        console.log(event.target.value, id)
    }


    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-container-user'}
                size='lg'
            >
                <ModalHeader toggle={() => { this.toggle() }}>Member infomation</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeAddUser(event, 'email') }}></input>
                        </div>

                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' onChange={(event) => { this.handleOnChangeAddUser(event, 'password') }}></input>
                        </div>
                        <div className='input-container'>
                            <label>First name</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeAddUser(event, 'firstName') }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Last name</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeAddUser(event, 'lastName') }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Phone </label>
                            <input type='text' onChange={(event) => { this.handleOnChangeAddUser(event, 'phone') }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Role</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeAddUser(event, 'role') }}></input>
                        </div>
                        <div className='input-container max-width-input '>
                            <label>Status</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeAddUser(event, 'status') }}></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.toggle() }}>
                        Save change
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


