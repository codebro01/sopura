'use client'

import React from 'react';

import { IconButton } from '@mui/material';
import { UseTheme } from '../../UseTheme';


export const IconsCardComponent = ({ Icon }) => {
    const colors = UseTheme();
    return (
        <IconButton

            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: {
                    xs: 2,
                    sm: 3, 
                    md: 5, 
                },
                background: colors.background,
                borderRadius: 2,
                transition: "background 0.2s ease-out", 
                "&:hover": {
                    background: "rgba(0, 0, 0, 0.8)",
                    scale: 1.02,
                }
            }}
        >
            {Icon}
        </IconButton>
    )
}
