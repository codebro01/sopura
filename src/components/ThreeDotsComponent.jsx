'use client'
import React from 'react'
import { Box } from '@mui/material'
import { UseTheme } from '../../UseTheme'

export const ThreeDotsComponent = ({ color }) => {
  const colors = UseTheme()

  return (
    <Box display={'flex'} width={'100px'} gap={1} mt={5}>
      <Box width={10} height={10} borderRadius={'50%'} bgcolor={color}></Box>
      <Box width={10} height={10} borderRadius={'50%'} bgcolor={color}></Box>
      <Box width={10} height={10} borderRadius={'50%'} bgcolor={color}></Box>
    </Box>
  )
}
