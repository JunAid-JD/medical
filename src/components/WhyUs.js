import { Grid } from '@mui/material'
import React from 'react'

const WhyUs = () => {
    return (
        <div className='whyus'>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} md={3} >
                    <h1 className='mainheading'>Why <span className='green'>choose us?</span></h1>
                    <p className='greytext'>Your well-being is our top priority. That is why
                        we guarantee that your healthcare will be made easy - appointment, prescription
                        and monitoring.
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <img src="images/card1.png" alt="card" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <img src="images/card2.png" alt="card" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <img src="images/card3.png" alt="card" />
                </Grid>
            </Grid>
        </div >
    )
}

export default WhyUs
