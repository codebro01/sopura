'use client'

import React, { useEffect } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { UseTheme } from '../../UseTheme'
import { IconsCardComponent } from './IconsCardComponent'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import { AccountBalanceWallet } from '@mui/icons-material'
import AOS from 'aos'

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'

const centerElementStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const HeroComponent = () => {
  const colors = UseTheme()

  useEffect(() => {
    AOS.init() // Customize the animation duration or other settings
  }, [])

  return (
    <Box
      component={'header'}
      minHeight={'70vh'}
      width={'100%'}
      // minWidth={'80vw'}
    >
      <Box
        data-aos="fade-in"
        data-aos-duration="300"
        sx={{
          ...centerElementStyle,
          flexDirection: 'row',
          flexWrap: {
            xs: 'wrap',
            md: 'nowrap',
          },
          gap: 5,
          padding: {
            xs: 1,
            md: 3,
          },
          justifyContent: 'space-around',
          // backgroundImage: "url('hero background.svg')",
          backgroundSize: 'cover', // Ensures it covers the box
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents repetition
          height: '100vh', // Adjust as needed
          width: '100%', // Ensures it spans full width
          position: 'relative',
          // '&::before': {
          //   content: '""',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   width: '100%',
          //   height: '100%',
          //   background: 'rgba(0, 0, 0, 0.8)',
          //   zIndex: 1,
          // },
          // "&::after": {
          //     zIndex: 2,
          //     content: `""`,
          //     position: "absolute",
          //     bottom: 0,
          //     right: 0,
          //     width: "50%",
          //     height: "50%",
          //     backgroundColor: "#fff",
          //     transform: "rotate(180deg)",
          //     clipPath: "circle(50% at bottom right)",
          // }
        }}
      >
        <Box
          sx={{
            ...centerElementStyle,
            flexBasis: {
              xs: '100%',
              md: '65%',
            },
            // minWidth: '80vw',
            width: '100%',
            gap: 5,
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h1"
            color={colors.lightBlack}
            textAlign={'center'}
            position={'relative'}
            zIndex={2}
            mt={15}
            letterSpacing={3}
            textTransform={'uppercase'}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Sopura Business Concept.
          </Typography>
          <Typography
            variant="h2"
            textAlign={'center'}
            color={colors.lightBlack}
            position={'relative'}
            zIndex={2}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Gateway to Africa’s financial market Hub.
          </Typography>
          <Box
            sx={{
              ...centerElementStyle,
              gap: 3,
              zIndex: 2,
              // backgroundImage: "url('/blog-2.png')",
              // backgroundSize: "cover",
              // zIndex: 3,

              '> * ': {
                fontSize: {
                  xs: '13px',
                  sm: '15px',
                  md: '22px',
                },
              },
              '> *:hover ': {
                background: colors.primary,
              },
            }}
          >
            <Button
              variant={'contained'}
              sx={{
                fontSize: {
                  xs: '13px',
                  sm: '15px',
                  md: '18px',
                },
              }}
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Get Started
            </Button>
            <Link href={'/about'}>
              <Button
                variant={'contained'}
                sx={{
                  fontSize: {
                    xs: '13px',
                    sm: '15px',
                    md: '18px',
                  },
                  background: colors.deepPink,
                }}
                endIcon={<ArrowDownwardRoundedIcon />}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          flexBasis={'30%'}
          // flexGrow={1}
          component={'img'}
          src="finance-app.gif"
          variant="section"
          sx={{
            ...centerElementStyle,
            width: {
              xs: '250px',
              // md: '220px',
              lg: '500px',
            },
            zIndex: 2,
            gap: {
              xs: 2,
              sm: 5,
              md: 7,
            },
          }}
        />
        {/* <IconsCardComponent
            dataAosValue={'fade-up'}
            dataAosDuration={'400'}
            Icon={
              <AccountBalanceIcon
                sx={{
                  color: colors.primary,
                }}
              />
            }
          />
          <IconsCardComponent
            dataAosValue={'fade-up'}
            dataAosDuration={'500'}
            Icon={
              <AccountBalanceWalletIcon
                sx={{
                  color: colors.blue,
                }}
              />
            }
          />
          <IconsCardComponent
            dataAosValue={'fade-up'}
            dataAosDuration={'600'}
            Icon={
              <CreditScoreIcon
                sx={{
                  color: colors.deepPink,
                }}
              />
            }
          />
          <IconsCardComponent
            dataAosValue={'fade-up'}
            dataAosDuration={'700'}
            Icon={
              <ElectricBoltIcon
                sx={{
                  color: colors.yellow,
                }}
              />
            }
          /> */}
      </Box>
      <Box></Box>
    </Box>
  )
}
