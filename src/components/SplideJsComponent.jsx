'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import { Box } from '@mui/material';

export const SplideJsComponent = () => {

  const splideImages = [
    'Artboard 1Sopura ads.png', 
    'Artboard 2Sopura ads.png', 
    'Artboard 3Sopura ads.png', 
    'Artboard 4Sopura ads.png', 
    'Artboard 5Sopura ads.png', 
    'Artboard 6Sopura ads.png', 
    'Artboard 7Sopura ads.png', 
    'Artboard 8Sopura ads.png', 
    'Artboard 9Sopura ads.png', 
  ]
  return (
    <Box
      sx={{
        marginTop: '6rem',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        // backgroundImage: "url('sliderbg.jpg')",
        background: 'rgba(239, 239, 239, 0.9)',
        width: '100%',
        minHeight: {
          xs: '50vh',
          md: '100vh',
          alignItems: 'center',
        },
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Splide
        options={{
          rewind: true,
          width: 900,
          gap: '1rem',
          type: 'loop',
          perPage: 2,
          perMove: 1,
          autoplay: true,
          autoHeight: true,
          mediaQuery: 'max',
          fixedWidth: 400,

          breakpoints: {
            1100: {
              width: '50vw',
              perPage: 1,
            },
            899.98: {
              perPage: 1,
              width: '60vw',
            },
            549.98: {
              perPage: 1,
              width: '90vw',
              gap: '0.5rem',
              fixedWidth: 350,
            },
          },
        }}
        aria-label="Sopura Banners"
      >
       {splideImages.map((image, index) => {
        return (
          <SplideSlide key = {index + 1}>
            <Box
              sx={{ width: { xs: '350px', sm: '400px' }, borderRadius: '10px' }}
            >
              <Box
                component={'img'}
                src={image}
                alt={`Image ${index + 1}`}
                sx={{ width: '100%', borderRadius: '10px' }}
              />
            </Box>
          </SplideSlide>
        )
       })}
       
   

      </Splide>
    </Box>
  )
}
