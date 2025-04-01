"use client"

import React from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import { UseTheme } from '../../UseTheme';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import { motion } from "framer-motion";
import { CardComponent } from './cardsComponent';
import { CodeIcon, LightbulbIcon, RocketIcon } from 'lucide-react';



export const AboutUsComponent = () => {

    const colors = UseTheme();
    const centerElementStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",

    }
    return (
        <>
            <Box id={'about'} variant={'section'} minHeight={'70vh'} pt={10} sx={{
                ...centerElementStyle,
                width: "80vw",
                flexDirection: "column",
                justifyContent: "flex-start",
                marginTop: {
                    xs: 5,
                    md: 10

                }

            }}
                className={'itemContainerShadow'}
            >
                <Box component="header">
                    <Typography variant='h5' className="underline">
                        About us
                    </Typography>
                </Box>
                <Box component="section" id={"who-we-are"}
                    sx={{
                        ...centerElementStyle,
                        marginTop: "50px",
                        paddingBottom: "130px",
                        position: "relative",
                        "&::after": {
                            content: `""`,
                            width: "200px",
                            height: "10px",
                            position: "absolute",
                            bottom: "20px",
                            background: colors.primary,
                            left: "50%",
                            transform: "translateX(-50%)",
                            borderRadius: 4,
                        },



                    }}
                >
                    <Box sx={{
                        flexBasis: "40%",
                        width: "100%",
                    }}>
                        <Box component='img' src='who are we.png' alt='Who we are'
                            sx={{
                                width: "70%",
                            }}

                        />
                    </Box>
                    <Box component={'article'}
                        sx={{
                            flexBasis: "50%"
                        }}
                    >
                        <Box component={'ul'}
                            sx={{
                                ...centerElementStyle,
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: {
                                    xs: 1,
                                    md: 3,
                                },
                                " > * ": {
                                    fontSize: {
                                        xs: "14px",
                                        md: "18px"
                                    },
                                    lineHeight: 1.5
                                }
                            }}
                        >
                            <Box component={'li'}>
                                ZIRCONTRUST SECURITIES LIMITED is a financial service provider with exclusivity in inter-dealer broking of financial instruments  between dealers and financial institutions.
                            </Box>
                            <Box component={'li'}>
                                We act as financial intermediaries in the markets working to facilitate seamless transactions between broker/dealers or Market Makers in the Nigeria Financial market.
                            </Box>
                            <Box component={'li'}>
                                We strive to be the best in service and support delivery to our clients
                            </Box>
                            <Box component={'li'}>
                                Incorporated in 2020,  ZIRCONTRUST Ltd is licensed by SEC and FMDQ
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 5,
                    overflow: "hidden",

                    gap: {
                        xs: 3,
                        md: 5
                    }
                }}
            >
                <CardComponent title="Liquidity & Anonimity" subtitle="We provide information, liquidity and anonymity as we facilitate trade between our clients.
" icon={<CodeIcon />} color="#3f51b5" />
                <CardComponent title="Enhancing Price Discovery" subtitle="Sopura has a commitment to enhancing price discovery and transparency between clients’ interest and transactions" icon={<LightbulbIcon />} color="#f50057" />
                <CardComponent title="Facilitating Information Flow
" subtitle="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." icon={<RocketIcon />} color="#ff9800" />
            </Box>


        </>

    )
}
