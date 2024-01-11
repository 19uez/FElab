
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import HomeHeader from '../../HomePage/HomeHeader';
import a from '../../../assets/lab-members/productValues2.svg'
import b from '../../../assets/lab-members/productHowItWorks3.svg'
import c from '../../../assets/lab-members/productValues3.svg'
import d from '../../../assets/lab-members/productCurvyLines.png'
import Footer from '../Footer';
const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
};

const image = {
    height: 55,
    my: 4,
};

function Introduce() {
    return (
        <React.Fragment>
            <HomeHeader isShowBanner={false} />
            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: 'white', backgroundImage: `url(${d})`, overflow: 'hidden' }}
            >
                <Container
                    sx={{
                        mt: 10,
                        mb: 15,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        // component="img"
                        // src="../../../assets/lab-members/productCurvyLines.png"
                        // alt="curvy lines"
                        sx={{
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: -180,
                            opacity: 0.7,
                            backgroundImage: `url(${d})`
                        }}
                    />
                    <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, fontSize: '40px' }}>
                        About Us
                    </Typography>
                    <div>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <Box sx={number}>1.</Box>
                                    <Box
                                        component="img"
                                        src={`${a}`}
                                        alt="suitcase"

                                        sx={{
                                            height: 55,
                                            my: 4,

                                        }}

                                    />
                                    <Typography variant="h5" align="center">
                                        Đây là lab do  thành lập với sứ mệnh đào tạo, chia sẻ kinh nghiệm học tập cũng như giúp đỡ các bạn sinh viên trong các định hướng sau này!
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <Box sx={number}>2.</Box>
                                    <Box
                                        component="img"
                                        src={`${b}`}
                                        alt="graph"
                                        sx={image}
                                    />
                                    <Typography variant="h5" align="center">
                                        Môi trường học tập, nghiên cứu lành mạnh


                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <Box sx={number}>3.</Box>
                                    <Box
                                        component="img"
                                        src={`${c}`}
                                        alt="clock"
                                        sx={image}
                                    />
                                    <Typography variant="h5" align="center">
                                        {'Được training các dự án thực tế giúp các bạn sinh viên có kinh nghiệm khi xin việc. '}
                                        {'Thường xuyên tổ chức các buổi ngoại khóa nâng cao tình cảm các thành viên'}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                    <Button
                        color="secondary"
                        size="large"
                        variant="contained"
                        component="a"
                        href="http://localhost:3000/home"
                        sx={{ mt: 8 }}
                    >
                        Get started
                    </Button>
                </Container>
            </Box>
            <Footer />
        </React.Fragment>
    );
}

export default Introduce;
