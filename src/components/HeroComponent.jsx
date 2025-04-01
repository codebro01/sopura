'use client';

import React from 'react';
import { Box, Grid, Typography, Button } from "@mui/material";
import { UseTheme } from '../../UseTheme';
import { IconsCardComponent } from './IconsCardComponent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { AccountBalanceWallet } from '@mui/icons-material';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


const centerElementStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

export const HeroComponent = () => {
    const colors = UseTheme();

    return (
        <Box component={'header'} minHeight={"100vh"} width={'100%'}>
            <Box
                sx={{
                    ...centerElementStyle,
                    flexDirection: "column",
                    gap: 10,
                    padding: 3,
                    backgroundImage: "url('hero background.svg')",
                    backgroundSize: "cover", // Ensures it covers the box
                    backgroundPosition: "center", // Centers the image
                    backgroundRepeat: "no-repeat", // Prevents repetition
                    height: "100vh", // Adjust as needed
                    width: "100%", // Ensures it spans full width
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.8)",
                        zIndex: 1,
                    },
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
                        gap: 3,
                        flexDirection: "column"

                    }}
                >
                    <Typography variant='h1' color={colors.offWhite} textAlign={'center'} position={'relative'} zIndex={2} mt={15} letterSpacing={3} textTransform={'uppercase'}
                        className='animate__animated animate__fadeInUp'
                    >
                        Sopura Business Concept.
                    </Typography>
                    <Typography variant='h2' textAlign={'center'} color={colors.offWhite} position={'relative'} zIndex={2}
                        className='animate__animated animate__fadeInUp'
                    >
                        Gateway to Africa’s financial market Hub.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        ...centerElementStyle,
                        gap: 3,
                        zIndex: 2,
                        // backgroundImage: "url('/blog-2.png')", 
                        // backgroundSize: "cover", 
                        // zIndex: 3,

                        "> * ": {
                            fontSize: {
                                xs: "13px",
                                sm: "15px",
                                md: "22px"
                            }
                        },
                        "> *:hover ": {
                            background: colors.primary,
                        }
                    }}

                >
                    <Button variant={"contained"} sx={{
                        fontSize: {
                            xs: "13px",
                            sm: "15px",
                            md: "22px"
                        },

                    }}
                        endIcon={<ArrowForwardRoundedIcon


                        />}

                    >
                        Get Started
                    </Button>
                    <Button variant={"contained"} sx={{
                        fontSize: {
                            xs: "13px",
                            sm: "15px",
                            md: "22px",
                        },
                        background: "#fff",
                        color: colors.primary,

                    }}
                        endIcon={<ArrowForwardRoundedIcon />}
                    >
                        Learn More
                    </Button>
                </Box>
                <Box variant='section' sx={{
                    ...centerElementStyle,
                    zIndex: 2,
                    gap: {
                        xs: 2,
                        sm: 5,
                        md: 7,
                    }
                }}

                >
                    <IconsCardComponent
                        Icon={<AccountBalanceIcon
                            sx={{

                                color: colors.primary
                            }}
                        />}
                    />
                    <IconsCardComponent
                        Icon={<AccountBalanceWalletIcon

                            sx={{

                                color: colors.blue
                            }} />}
                    />
                    <IconsCardComponent
                        Icon={<CreditScoreIcon

                            sx={{

                                color: colors.deepPink
                            }} />}
                    />
                    <IconsCardComponent
                        Icon={<ElectricBoltIcon
                            sx={{

                                color: colors.yellow
                            }}
                        />}
                    />
                </Box>

            </Box>
            <Box>

            </Box>
        </Box >
    )
}
