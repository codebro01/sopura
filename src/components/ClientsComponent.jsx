'use client'

import React from 'react'
import { Box, Typography, Grid, useTheme } from '@mui/material'
import { ClientsCard } from './ClientsCard'
import { Landmark } from 'lucide-react'
import { UseTheme } from '../../UseTheme'
import { Users } from 'lucide-react'
import { BriefcaseBusiness } from 'lucide-react'

export const ClientsComponent = () => {
  const colors = UseTheme()
  return (
    <Box
      component={'section'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      flexWrap= {"wrap"} 
      gap={5}
      mt={15}
      minHeight={'50vh'}
    >
      <Typography variant="h3" position={'relative'} className={'underline'}>
        Our Clients
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: {
            xs: 2,
            md: 4,
          },
          marginTop: 5,
        }}
      >
      
        <ClientsCard
          icon={<Landmark color={colors.blue} />}
          title="Institutions"
          color={colors.blue}
        />
        <ClientsCard
          icon={<BriefcaseBusiness color={colors.deepPink} />}
          title="Cooporates"
          color={colors.deepPink}
        />
        <ClientsCard
          icon={<Landmark color={colors.yellow} />}
          title="State Governments"
          color={colors.yellow}
        />

        <ClientsCard
          icon={<Users color={colors.primary} />}
          title="High Networth Individuals"
          color={colors.primary}
        />
      </Box>
    </Box>
  )
}
