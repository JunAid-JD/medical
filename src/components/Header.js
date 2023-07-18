import React from 'react';
import { Box, Button, Grid, Stack } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import Tooltip from '@mui/material/Tooltip';
// import playstore from './headerplay.png';

const Header = () => {
    return (
        <>
            <header>
                {/* <Grid container justifyContent="space-between">
                    <Grid item md={6}>
                        <img src="images/logo.png" alt="logo" />
                    </Grid>
                    <Grid item md={6}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" startIcon={<AppleIcon />}>
                                Delete
                            </Button>
                            <Button variant="outlined" startIcon={<PlayArrowIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </Grid>
                </Grid > */}
                <Box display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
                    <div>  <img src="images/logo.png" alt="logo" /></div>
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Tooltip title="Comming Soon">
                                {/* <Button className='headerappbtns' variant="outlined" startIcon={<AppleIcon />} style={{ color: "#3F3F3F", border: '1px solid #3F3F3F' }}>
                                    App Store
                                </Button> */}
                                <img src="images/applestore.png" alt="play" style={{ cursor: "pointer" }} />
                            </Tooltip>
                            <Tooltip title="Comming Soon">
                                {/* <Button className='headerappbtns' variant="outlined" startIcon={<PlayArrowIcon />} style={{ color: "#3F3F3F", border: '1px solid #3F3F3F' }}>
                                    Play Store
                                </Button> */}
                                <img src="images/playstore.png" alt="play" style={{ cursor: "pointer" }} />
                            </Tooltip>
                            <Tooltip title="Comming Soon">
                                <Button className='headermobilebtn' variant="outlined" style={{ color: "#3F3F3F", border: '1px solid #3F3F3F' }}>
                                    Get the app
                                </Button></Tooltip>
                        </Stack>
                    </div>
                </Box>
            </header >
        </>
    )
}

export default Header
