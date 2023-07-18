import React from 'react';
import { Box, IconButton } from '@mui/material'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Test = () => {
  return (
    <div className='test'>
      <Box display={"flex"} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} >
        <h1 className='mainheading'>Testimonials</h1>
        <p className='greytext'>See what our happy customers have to say about us!</p>

      </Box>
      <Box display={"flex"} justifyContent={'space-between'} alignItems={'start'} >
        <IconButton className="arrowleft"><ArrowBackIosNewIcon /></IconButton>
        <div className="quotesection">
          <div className="quote"><img src="images/Quote.png" alt="quote" className='quote1' /><p> Highly recommended! Consulting on this app is very convenient.
            Consulted a doctor within minutes through this app and got good medical advice.</p>
            <img src="images/Quote2.png" alt="quote" className='quote2' /></div>
          <div className="authorname">John Smith</div>
          <div className="circles">
            <img src="images/circle1.png" alt="circle" />
            <img src="images/circle2.png" alt="circle" />
            <img src="images/circle2.png" alt="circle" />
            <img src="images/circle2.png" alt="circle" />
          </div>
        </div>
        <IconButton className="arrowright"><ArrowForwardIosIcon /></IconButton>
      </Box>
    </div>
  )
}

export default Test
