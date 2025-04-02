import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export const ProductsOfferingCard = ({ title, Icon, color, description }) => {
  return (
    <Box
      sx={{
        width:"100%", 
        minWidth: "300px", 
        height: "100%", 
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 2,
        overflow: 'hidden',
        transition: 'all 0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box sx={{ height: 8, backgroundColor: color }} />
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${color}15`,
            mb: 2,
          }}
        >
          <Icon size= {28}/>
        </Box>
        <Typography variant="h6" fontWeight="bold" color="text.primary" mb={1}>
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ color, fontSize: '0.875rem', fontWeight: 500, background: "transparent", 
            transition: "background 0.25s ease-in-out",
            "&:hover": {
              background: "rgba(220, 220, 220)", 
            }
             }}
            endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
          >
            Learn more
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
