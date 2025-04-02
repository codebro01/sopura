'use client';

import React from 'react';
import {Box, Typography, IconButton} from "@mui/material";
import { Landmark } from 'lucide-react';
import { UseTheme } from '../../UseTheme';

export const ClientsCard = ({title, icon, color}) => {
  const colors = UseTheme();
  return (
    <Box
      display={'flex'}
      gap={2}
      justifyContent={'center'}
      alignItems={'center'}
      bgcolor={color}
      borderRadius={3}
      pl={2}
      pr={2}
      pt={3}
      pb={3}
      sx={{
        width: {
          xs: '200px',
          md: '250px',
        },
        '> *': {
          color: '#fff',
        },
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: '#fff',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '30px',
          }}
        >
          {icon}
        </Box>
      </Box>
      <Typography>{title}</Typography>
    </Box>
  )
}
