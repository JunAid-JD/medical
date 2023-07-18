import { Box, Grid } from '@mui/material'
import React from 'react'

const Hero = () => {
    return (
        <div className='herocontainer'>
            <Box display={"flex"} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} >
                <Grid container spacing={2} >
                    <Grid item sm={12} md={6} order={{ sm: 2, md: 1, xs: 2 }}>
                        <div className="heroleft">
                            <h1 className='mainheading'>Quality medical advice <br /> <span className='green'>from your home</span></h1>
                            <p className='greytext'>Diabbymate provides quality care for diabetes and mental health.
                                We aim to make healthcare more accessible and help you consult experienced specialist doctors anytime, anywhere.
                            </p>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6} order={{ sm: 1, md: 2, xs: 1 }}>
                        <div className="heroright" >
                            <img src="/images/Frame-1.png" alt="frame" />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Hero
