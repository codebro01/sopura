'use client';

import React, { useState, cloneElement } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export const CardComponent = ({
  title,
  subtitle,
  icon,
  color = '#3f51b5',
  dataAosAnimation,
  anchorPlacement,
  dataAosDuration,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      data-aos={dataAosAnimation}
      data-aos-anchor-placement={anchorPlacement}
      data-aos-duration={dataAosDuration}
      style={{ overflow: 'hidden' }} // Add this
      whileHover={{
        scale: 1.03,
        transition: {
          duration: 0.3,
        },
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          borderRadius: 2,
          boxShadow: isHovered
            ? '0 10px 30px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)'
            : '0 4px 6px rgba(0,0,0,0.05)',
          overflow: 'visible',
          transition: 'box-shadow 0.3s ease-in-out',
          height: '100%',
          display: 'flex',
          width: '300px',
          flexDirection: 'column',
          position: 'relative',
          background: 'rgba(84, 178, 74, 0.15)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            pt: 5,
            px: 2,
          }}
        >
          <motion.div
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: `${color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: color,
                  transition: 'all 0.3s ease',
                  transform: isHovered
                    ? 'scale(1.1) rotate(5deg)'
                    : 'scale(1) rotate(0deg)',
                }}
              >
                {cloneElement(icon, {
                  size: 28,
                  style: {
                    strokeWidth: 2,
                  },
                })}
              </Box>
            </Box>
          </motion.div>
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            pt: 1,
          }}
        >
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                position: 'relative',
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: '50%',
                  width: isHovered ? '100%' : '0%',
                  height: 2,
                  backgroundColor: color,
                  transition: 'width 0.3s ease',
                  transform: 'translateX(-50%)',
                },
              }}
            >
              {title}
            </Typography>
          </motion.div>
          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

