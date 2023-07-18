import { Box } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <div className='servicessection'>
            <Box display={"flex"} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} >
                <h1 className='mainheading'>Our <span className='green'>Services</span></h1>
                <p className='greytext'>Diabbymate offers a variety of healthcare services in from the comfort of your homes</p>

                <div className="servicesimg">
                    <img src="images/services.png" alt="services" />
                </div>
                <div className="services">
                    {/* <Box display={"flex"} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} >
                        <img src="images/services1.png" alt="services" />
                        <img src="images/5.png" alt="services" />
                        <img src="images/services3.png" alt="services" />
                        <img src="images/services4.png" alt="services" />
                        <img src="images/services5.png" alt="services" />
                        <img src="images/services6.png" alt="services" />
                    </Box> */}


                    <img src="images/line1.png" alt="services" className='line1' />
                    <img src="images/services1.png" alt="services" className='service1' />
                    <img src="images/line2.png" alt="services" className='line2' />
                    <img src="images/services2.png" alt="services" className='service2' />
                    <img src="images/line3.png" alt="services" className='line3' />
                    <img src="images/services3.png" alt="services" className='service3' />
                    <img src="images/line4.png" alt="services" className='line4' />
                    <img src="images/line5.png" alt="services" className='line5' />
                    <img src="images/services4.png" alt="services" className='service4' />
                    <img src="images/line6.png" alt="services" className='line6' />
                    <img src="images/services5.png" alt="services" className='service5' />
                    <img src="images/line7.png" alt="services" className='line7' />
                    <img src="images/services6.png" alt="services" className='service6' />

                </div>
            </Box>

        </div>
    )
}

export default Services
