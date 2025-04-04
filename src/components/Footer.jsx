'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { UseTheme } from '../../UseTheme'
import {
  Mail,
  MapPinHouse,
  Phone,
  Link as LinkIcon,
  ArrowRight,
  MapPinned,
} from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
  const centerElementStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const colors = UseTheme()
  return (
    <Box
      component={'footer'}
      sx={{
        ...centerElementStyle,
        position: 'relative',
        padding: 'clamp(10px, 10vw, 30px)',
        mt: 7,
        width: '100%',
        // background: 'rgb(245, 249, 246)',
        // backgroundImage: "url('/footerBackground.svg')",
        zIndex: 3,
        gap: 2,
        borderTop: '3px solid',
        borderColor: colors.primary,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '40vh',
      }}
    >
      <Box
        sx={{
          flexBasis: {
            xs: '100%',
            md: '25%',
          },
        }}
      >
        <Box
          component={'img'}
          src="/logo.png"
          sx={{
            width: {
              xs: '200px',
              lg: '300px',
            },
            aspectRatio: 9 / 2.5,
          }}
        />
      </Box>

      <Box
        id="links"
        sx={{
          flexBasis: {
            xs: '100%',
            md: '25%',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 2,
          '> *': {
            display: 'flex',
            gap: 2,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Links
        </Typography>
        <Box component={'li'} mt={1}>
          <ArrowRight size={28} color={colors.primary} />
          <Link href={'/'}>Home</Link>
        </Box>

        <Box component={'li'}>
          <ArrowRight size={28} color={colors.primary} />
          <Link href={'/about'}>About</Link>
        </Box>
        <Box component={'li'}>
          <ArrowRight size={28} color={colors.primary} />
          <Link href={'/#services'}>Services</Link>
        </Box>
        <Box component={'li'}>
          <ArrowRight size={28} color={colors.primary} />
          <Link href={'/#team'}>Team</Link>
        </Box>
      </Box>

      <Box
        id="contact"
        sx={{
          flexBasis: {
            xs: '100%',
            md: '30%',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          '> * ': {
            display: 'flex',
            gap: 2,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Contact
        </Typography>
        <Box id="address" mt={1}>
          <Box>
            {' '}
            <MapPinHouse color={colors.primary} />
          </Box>
          <Typography>34, Ijaiye Road, off Akilo Road, Ogba -Lagos</Typography>
        </Box>
        <Box id="email">
          <Mail color={colors.primary} />
          <Typography>finance@sopurabiz.com.ng</Typography>
        </Box>
        <Box id="Phone No" display={'flex'} alignItems={'center'}>
          <Box>
            <Phone color={colors.primary} />
          </Box>
          <Box>
            <Typography>(+234) 817 5051 618</Typography>
            <Typography>(+234) 806 3596 078</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
