import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box'

// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LabMembers.scss'
class LabMembers extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (

            <div className='section-lab-members'>
                <div className='lab-members-container'>
                    <div className='lab-members-header'>
                        <span className='title-section'>Lab Members</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='lab-members-body'>
                        <Slider {...settings} >
                            <div className='lab-members-cusomize'>
                                <div className='bg-image'></div>
                                <div>Pham Viet Chuyen 1</div>
                            </div>
                            <div className='lab-members-cusomize'>
                                <div className='bg-image'></div>
                                <div>Pham Viet Chuyen 2</div>
                            </div>
                            <div className='lab-members-cusomize'>
                                <div className='bg-image'></div>
                                <div>Pham Viet Chuyen 3</div>
                            </div>
                            <div className='lab-members-cusomize'>
                                <div className='bg-image'></div>
                                <div>Pham Viet Chuyen 4</div>
                            </div>
                            <div className='lab-members-cusomize'>
                                <div className='bg-image'></div>
                                <div>Pham Viet Chuyen 5</div>
                            </div>
                            <div className='lab-members-cusomize'>
                                <div className='bg-image'></div>
                                <div>Pham Viet Chuyen 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LabMembers);
