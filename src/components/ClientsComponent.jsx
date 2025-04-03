'use client'

import React, { useEffect } from 'react'
import { Box, Typography, Grid, useTheme } from '@mui/material'
import { ClientsCard } from './ClientsCard'
import { Landmark } from 'lucide-react'
import { UseTheme } from '../../UseTheme'
import { Users } from 'lucide-react'
import { BriefcaseBusiness } from 'lucide-react'
import AOS from 'aos';

export const ClientsComponent = () => {
  const colors = UseTheme()

  useEffect(() =>{
    AOS.init();
  }, [])

  return (
    <Box
      component={'section'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      flexWrap={'wrap'}
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
          aosValue={'zoom-out-up'}
          anchorPlacement={'center-bottom'}
          delay={'400'}
          icon={<Landmark color={colors.blue} />}
          title="Institutions"
          color={colors.blue}
        />
        <ClientsCard
          aosValue={'zoom-out-up'}
          anchorPlacement={'center-bottom'}
          duration={'300'}
          icon={<BriefcaseBusiness color={colors.deepPink} />}
          title="Cooporates"
          color={colors.deepPink}
        />
        <ClientsCard
          aosValue={'zoom-out-up'}
          anchorPlacement={'center-bottom'}
          delay={'200'}
          icon={<Landmark color={colors.yellow} />}
          title="State Governments"
          color={colors.yellow}
        />

        <ClientsCard
          aosValue={'zoom-out-up'}
          anchorPlacement={'center-bottom'}
          delay={'100'}
          icon={<Users color={colors.primary} />}
          title="High Networth Individuals"
          color={colors.primary}
        />
      </Box>
    </Box>
  )
}
