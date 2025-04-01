'use client'

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ClientsCard } from './ClientsCard';

export const ClientsComponent = () => {
  return (
    <Box
        component={'section'}
    >
      <ClientsCard/>

    </Box>

  )
}
