import React from 'react'
import { Button, Grid, Stack } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import Tooltip from '@mui/material/Tooltip';


const Footer = () => {
    return (
        <>
            <footer>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} md={3} >
                        <div className="col1">
                            <h1 className='footerheading'><span className='green'>diabby</span>mate</h1>
                            <img src="images/insta.png" alt="social" />
                            <img src="images/facebook.png" alt="social" />
                            <img src="images/twitter.png" alt="social" />
                            <img src="images/linkedin.png" alt="social" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <div className="col2">
                            <p className='subheading'>About us</p>
                            <p className='subheading'>Services</p>
                            <p className='subheading'>Support</p>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <div className="col3">
                            <p className='subheading'>Contact us</p>
                            <p className='iconheading'><CallIcon /> 1234567890</p>
                            <p className='iconheading'><EmailIcon /> contactmail.@mail.com</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <p className='subheading'>Download the app</p>
                        <Stack direction="row" spacing={2}>
                            {/* <Button variant="outlined" startIcon={<AppleIcon />} style={{ color: "#FFFFFF", border: '0.7px solid rgba(255, 255, 255, 0.46)' }}>
                                for iOS
                            </Button> */}
                            <Tooltip title="Comming Soon">
                                <img src="images/footerapple.png" alt="play" style={{ cursor: "pointer" }} />
                            </Tooltip>
                            <Tooltip title="Comming Soon">
                                <img src="images/footerplay.png" alt="play" style={{ cursor: "pointer" }} />
                            </Tooltip>
                            {/* <Button variant="outlined" startIcon={<PlayArrowIcon />} style={{ color: "#FFFFFF", border: '0.7px solid rgba(255, 255, 255, 0.46)' }}>
                                for android
                            </Button> */}
                        </Stack>
                    </Grid>
                </Grid>
                <div className="copyrightsection">
                    <span className="line"></span>
                    <p className="copyright">
                        © diabbymate. All rights reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
