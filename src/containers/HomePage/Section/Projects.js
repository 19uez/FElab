import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box'

// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Projects.scss'

import labImg from '../../../assets/projects/elearning-800x380.png'
class Project extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (

            <div className='section-project'>
                <div className='project-container'>
                    <div className='project-header'>
                        <span className='title-section'>Projects</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='project-body'>
                        <Slider {...settings} >
                            <div className='project-cusomize'>
                                <div className='bg-image'></div>
                                <div>Xây dựng hệ thống đào tạo elearning cho ngành KTYS 1</div>
                            </div>
                            <div className='project-cusomize'>
                                <div className='bg-image'></div>
                                <div>Xây dựng hệ thống đào tạo elearning cho ngành KTYS 2</div>
                            </div>
                            <div className='project-cusomize'>
                                <div className='bg-image'></div>
                                <div>Xây dựng hệ thống đào tạo elearning cho ngành KTYS 3</div>
                            </div>
                            <div className='project-cusomize'>
                                <div className='bg-image'></div>
                                <div>Xây dựng hệ thống đào tạo elearning cho ngành KTYS 4</div>
                            </div>
                            <div className='project-cusomize'>
                                <div className='bg-image'></div>
                                <div>Xây dựng hệ thống đào tạo elearning cho ngành KTYS 5</div>
                            </div>
                            <div className='project-cusomize'>
                                <div className='bg-image'></div>
                                <div>Xây dựng hệ thống đào tạo elearning cho ngành KTYS 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Project);
