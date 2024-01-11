import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './HomeFooter.scss'
import img1 from '../../assets/lab-members/footer4.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from './Footer';
class HomeFooter extends Component {
    render() {
        return (
            <footer className='footer1'>
                <div className="container">
                    <ul className='footer'>
                        <li className='location'>
                            <h2>Our Lab</h2>
                            <div className='phone'>
                                <PhoneIcon style={{ fontSize: "20px" }} />
                                <span>024 3869 4242</span>
                            </div>
                            <span>CLQALab@gmail.com</span>
                            <p>Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                        </li>
                        <li>
                            <h2>Say hello</h2>
                            <form action="">
                                <input type="text" placeholder='Name' />
                                <input type="text" placeholder='Telephone' />
                                <input type="text" placeholder='Email' />
                                <textarea name="comment" id="comment" cols="25" rows="5" placeholder='Comment'></textarea>
                                <button>Submit</button>
                            </form>
                        </li>
                        <li>
                            <h2>Keep connected</h2>
                            <div style={{ display: "flex", gap: "30px" }}>
                                <TwitterIcon style={{ fontSize: "20px" }} />
                                <span>Twitter</span>
                            </div>
                            <div style={{ display: "flex", gap: "30px" }}>
                                <FacebookIcon style={{ fontSize: "20px" }} />
                                <span>Facebook</span>
                            </div>
                            <div style={{ display: "flex", gap: "30px" }}>
                                <InstagramIcon style={{ fontSize: "20px" }} />
                                <span>Instagram</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <Footer />
            </footer>


        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
