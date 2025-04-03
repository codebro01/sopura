import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navbarStyle from '../styles/navbar.module.css';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import { theme } from '../../themeRegistry';
import { getTheme } from '../../themeRegistry';
import { UseTheme } from '../../UseTheme';

export const NavbarComponent = () => {

  const colors = UseTheme();
  const theme = getTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [navIsActive, setNavIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname();
  const highLightCurrentPage = (path) => {
    return pathname === path;
  }


  const centerElementStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <Box
      component={'nav'}
      className=""
      sx={{
        ...centerElementStyle,
        justifyContent: 'space-between',
        height: '80px',
        width: '100%',
        padding: {
          xs: '0 15px',
          sm: '0 20px',
          md: '0 25px',
        },
        boxShadow: '5px 5px 10px rgba(84, 178, 74, 0.34)',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 4,
        background: '#fff',

        // borderBottom: isSmallScreen && navIsActive ? "2px solid #000" : "none"
      }}
    >
      <Box
        component={'img'}
        src="/logo.png"
        alt="sopura Logo"
        sx={{
          zIndex: 3,
          width: {
            xs: '90px',
            sm: '110px',
            lg: '150px',
          },
        }}
      />

      <Box
        component={'ul'}
        className={navIsActive ? 'slide-in-top' : ''}
        sx={{
          justifyContent: isSmallScreen ? 'flex-start' : 'center',
          alignItems: 'center',
          display: {
            xs: navIsActive ? 'flex' : 'none',
            sm: 'flex',
          },

          paddingTop: isSmallScreen ? '30%' : 0,

          background: '#fff',

          position: {
            xs: 'fixed',
            sm: 'relative',
          },
          top: isSmallScreen ? '0%' : '',
          width: isSmallScreen ? '100%' : 0,
          left: 0,
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          height: '100%',
          listStyleType: 'none',
          gap: {
            xs: 5,
            sm: 2,
            lg: 4,
          },
        }}
      >
        <Box
          component={'li'}
          sx={{
            ...centerElementStyle,
          }}
          onClick={() => setNavIsActive(!navIsActive)}
        >
          <Link
            href={'/'}
            className={highLightCurrentPage('/') ? 'underline' : ''}
            style={{
              fontSize: 'clamp(14px, 10vw, 50px)',
              padding: isSmallScreen ? '5px' : 0,
              fontSize: isSmallScreen && '30px',
            }}
          >
            Home
          </Link>
        </Box>

        <Box
          component={'li'}
          sx={{
            ...centerElementStyle,
          }}
          onClick={() => setNavIsActive(!navIsActive)}
        >
          <Link
            href={'/about'}
            className={highLightCurrentPage('/about') ? 'underline' : ''}
            style={{
              fontSize: 'clamp(14px, 3vw, 18px)',
              padding: isSmallScreen ? '5px' : 0,
              fontSize: isSmallScreen && '30px',
            }}
          >
            About
          </Link>
        </Box>
        <Box
          component={'li'}
          sx={{
            ...centerElementStyle,
          }}
        >
          <Link
          onClick={() => setNavIsActive(!navIsActive)}
            href={'/#services'}
            className={highLightCurrentPage('/#services') ? 'underline' : ''}
            style={{
              fontSize: 'clamp(14px, 3vw, 18px)',
              padding: isSmallScreen ? '5px' : 0,
              fontSize: isSmallScreen && '30px',
            }}
          >
            Services
          </Link>
        </Box>
        <Box
          component={'li'}
          sx={{
            ...centerElementStyle,
          }}
          onClick={() => setNavIsActive(!navIsActive)}
        >
          <Link
            href={'/#team'}
            className={highLightCurrentPage('/#team') ? 'underline' : ''}
            style={{
              fontSize: 'clamp(14px, 3vw, 18px)',
              padding: isSmallScreen ? '5px' : 0,
              fontSize: isSmallScreen && '30px',
            }}
          >
            Team
          </Link>
        </Box>
      </Box>

      <Box>
        <Button variant="outlined">Contact us</Button>
      </Box>

      <IconButton
        sx={{
          display: isSmallScreen ? 'flex' : 'none',
        }}
        onClick={() => setNavIsActive(!navIsActive)}
      >
        <DragHandleRoundedIcon
          sx={{
            fontSize: '40px',
            display: !navIsActive ? 'block' : 'none',
          }}
        />
        <CloseRoundedIcon
          sx={{
            fontSize: '40px',
            color: colors.red,
            display: navIsActive ? 'block' : 'none',
          }}
        />
      </IconButton>
    </Box>
  )
}

