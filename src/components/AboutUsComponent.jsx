'use client'

import React, { useEffect } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { UseTheme } from '../../UseTheme'
import SyncLockIcon from '@mui/icons-material/SyncLock'
import { motion } from 'framer-motion'
import { CardComponent } from './cardsComponent'
import AboutUsIcon from './AboutUsSvgIcon'
import AOS from 'aos';
import {
  CodeIcon,
  LightbulbIcon,
  RocketIcon,
  CircleCheckBig,
} from 'lucide-react'

export const AboutUsComponent = () => {
  const colors = UseTheme();

useEffect(() => {
    AOS.init();
}, [])


  const centerElementStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  }


  return (
    <>
      <Box
        id={'about'}
        variant={'section'}
        minHeight={'70vh'}
        bgcolor="rgba(84, 178, 74, 0.15)"
        borderRadius={5}
        pt={10}
        sx={{
          ...centerElementStyle,
          width: {
            xs: '90vw',
            md: '80vw',
          },
          flexDirection: 'column',
          justifyContent: 'flex-start',

          marginTop: {
            xs: 5,
          },
        }}
      >
        <Box component="header">
          <Typography variant="h3" className="underline">
            About us
          </Typography>
        </Box>
        <Box
          component="section"
          id={'who-we-are'}
          sx={{
            ...centerElementStyle,
            marginTop: '50px',
            padding: 1.5,
            gap: 10,
            paddingBottom: '130px',

            position: 'relative',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            '&::after': {
              content: `""`,
              width: {
                xs: "200px", 
                md: "350px"
              },
              height: '10px',
              position: 'absolute',
              bottom: '20px',
              background: colors.primary,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: 4,
            },
          }}
        >
          <Box
            id="container"
            sx={{
              display: 'flex',
              gap: 5,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {' '}
            <Box
              sx={{
                ...centerElementStyle,
                flexBasis: {
                  xs: '100%',
                  md: '47%',
                },
                width: '100%',

                pt: 3,
                pb: 3,
              }}
            >
              <Box
                component="img"
                src="aboutus.svg"
                alt="Who we are"
                sx={{
                  width: '50%',
                }}
              />
            </Box>
            <Box
              data-aos="fade-left"
              data-aos-duration="400"
              component={'article'}
              sx={{
                ...centerElementStyle,
                pl: 3,
                pr: 3,
                pt: 3,
                pb: 3,
                border: '2px solid',
                borderColor: colors.primary,
                borderRadius: 5,
                flexBasis: {
                  xs: '100%',
                  md: '47%',
                },
              }}
            >
              <Box
                component={'ul'}
                sx={{
                  ...centerElementStyle,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: {
                    xs: 1,
                    md: 3,
                  },
                  ' > * ': {
                    fontSize: {
                      xs: '14px',
                      md: '18px',
                    },
                    lineHeight: 1.5,
                  },
                }}
              >
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography>
                    SOPURA BUSINESS CONCEPT is a financial service provider with
                    exclusivity in inter-dealer broking of financial instruments
                    between dealers and financial institutions.
                  </Typography>
                </Box>
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography>
                    We act as financial intermediaries in the markets working to
                    facilitate seamless transactions between broker/dealers or
                    Market Makers in the Nigeria Financial market.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            id="container"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            {' '}
            <Box
              sx={{
                ...centerElementStyle,

                flexBasis: {
                  xs: '100%',
                  md: '47%',
                },
                width: '100%',
                order: 2,
              }}
            >
              <Box
                component="img"
                src="performanceOverview.svg"
                alt="Who we are"
                sx={{
                  width: '70%',
                }}
              />
            </Box>
            <Box
              component={'article'}
              data-aos="fade-right"
              data-aos-duration="400"
              sx={{
                ...centerElementStyle,
                pl: 3,
                pr: 3,
                pt: 3,
                pb: 3,

                border: '2px solid',
                borderColor: colors.primary,
                borderRadius: 5,
                order: 1,
                flexBasis: {
                  xs: '100%',
                  md: '47%',
                },
              }}
            >
              <Box
                component={'ul'}
                sx={{
                  ...centerElementStyle,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: {
                    xs: 1,
                    md: 3,
                  },
                  ' > * ': {
                    fontSize: {
                      xs: '14px',
                      md: '18px',
                    },
                    lineHeight: 1.5,
                  },
                }}
              >
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <CircleCheckBig size={28} color={colors.primary} />

                  <Typography>
                    We strive to be the best in service and support delivery to
                    our clients
                  </Typography>
                </Box>
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <CircleCheckBig size={28} color={colors.primary} />

                  <Typography>
                    Incorporated in 2020, ZIRCONTRUST Ltd is licensed by SEC and
                    FMDQ
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box
                    id={"what-we-do"}
                    component={'section'} 
                    sx={{
                        ...centerElementStyle,
                        marginTop: 5
                    }}
                >
                    <Box
                        sx={{
                            ...centerElementStyle,
                            flexDirection: "column", 
                            backgroundColor: colors.primary,
                            width: "300px",
                            height: "300px",
                            borderRadius: 3,
                            position:"relative", 
                            padding: 2, 
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.5)",
                            zIndex: 1,
                            borderRadius: 3,

                        },
                             "> * ": {
                                color:"#fff", 
                                zIndex: 2,
                             }
                        }}
                    >
                    <IconButton sx = {{}}>
                        <SyncLockIcon/>
                    </IconButton>

                        <Typography variant='h3'>
                            Main Title
                        </Typography>
                        <Typography variant='h6'>
                            Sub Title
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quisquam.
                        </Typography>

                    </Box>
                </Box> */}

      <Box
        id="what-we-do"
        component="section"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          overflow: 'hidden',

          gap: {
            xs: 3,
            md: 5,
          },
        }}
      >
        <CardComponent
          dataAosAnimation={'fade-up'}
          anchorPlacement={'center-bottom'}
          dataAosDuration={'400'}
          title="Liquidity & Anonimity"
          subtitle="We provide information, liquidity and anonymity as we facilitate trade between our clients.
"
          icon={<CodeIcon />}
          color="#3f51b5"
        />
        <CardComponent
          dataAosAnimation={'fade-up'}
          anchorPlacement={'bottom-bottom'}
          dataAosDuration={'200'}
          title="Enhancing Price Discovery"
          subtitle="Sopura has a commitment to enhancing price discovery and transparency between clients’ interest and transactions"
          icon={<LightbulbIcon />}
          color="#f50057"
        />
        <CardComponent
          dataAosAnimation={'fade-up'}
          anchorPlacement={'center-bottom'}
          dataAosDuration={'400'}
          title="Facilitating Information Flow
"
          subtitle="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          icon={<RocketIcon />}
          color="#ff9800"
        />
      </Box>
    </>
  )
}
