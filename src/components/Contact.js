import { Box, Grid } from '@mui/material'
import { TextField, InputAdornment, Button } from '@mui/material';
import React, { useState } from 'react'


const Contact = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Perform your desired action, such as submitting the form or making an API request
        // In this example, we'll log the email to the console
        console.log('Subscribed email:', email);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    return (
        <div className='contact'>
            <Box display={"flex"} justifyContent={'center'} alignItems={'center'} >
                <Grid container  >
                    <Grid item sm={12} md={6} order={{ sm: 2, md: 1, xs: 2 }}>
                        <img src="images/box.png" alt="box" className='contactbox' />
                        <div className='subscribe'>
                            <TextField label="Subscribe"
                                label="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                                sx={{ width: '300px' }}
                                id="fullWidth"
                                style={{ color: "grey" }} />
                            <Button variant="contained" style={{ width: '300px' }} color="success" onClick={handleSubscribe}>
                                Subscribe
                            </Button>
                            {/* <img src="images/subscribe.png" alt="button" width='300px' /> */}
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6} order={{ sm: 1, md: 2, xs: 1 }}>
                        <h1 className='mainheading'>Your health guardian is<br />
                            <span className='green'>on the way</span></h1>
                        <p className='greytext'>Get notified when the app is launched</p>
                        <div className="search" >
                            {/* <img src="images/searchbtn.png" alt="search" /> */}
                            <TextField
                                label="Subscribe"
                                value={email}
                                onChange={handleEmailChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button variant="contained" color="success" onClick={handleSubscribe}>
                                                Subscribe
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Contact
