'use client'

import React, {useEffect} from 'react'
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material'
import { Users, Briefcase } from 'lucide-react';
import VisionMission from '@/components/VisionAndMission';
import AOS from 'aos'
import {
  CircleCheckBig,
  ShieldQuestion,
  ChartCandlestick,
  CloudLightning,
  ChartLine,
} from 'lucide-react'
import { UseTheme } from '../../../UseTheme';
const Aboutpage = () => {

  useEffect(() => {
    AOS.init({offset: "50"});
  }, []);


  const colors = UseTheme();

  return (
    <Box mt={10} component={'section'}>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#55b24a10', py: 8, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight="bold"
            color="textPrimary"
            gutterBottom
          >
            About Our Company
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            maxWidth="md"
            mx="auto"
          >
            We're dedicated to providing innovative solutions with a commitment
            to excellence and sustainability.
          </Typography>
        </Container>
      </Box>

      {/* Who We Are Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={'center'}
              mb={2}
            >
              <Users size={28} color="#55b24a" style={{ marginRight: 8 }} />
              <Typography
                variant="h4"
                fontWeight="bold"
                className="underline"
                pb={1}
              >
                Who We Are
              </Typography>
            </Box>

            <Box
              component={'article'}
              data-aos="fade-right"
              data-aos-duration="400"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pl: 3,
                pr: 3,
                pt: 3,
                pb: 3,

                border: '2px solid',
                borderColor: colors.primary,
                borderRadius: 2,
                order: 1,
                flexBasis: {
                  xs: '100%',
                  md: '47%',
                },
              }}
            >
              <Box
                component={'ul'}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: {
                    xs: 1,
                    md: 3,
                  },
                  ' > * ': {
                    fontSize: {
                      xs: '14px',
                      md: '18px',
                    },
                    lineHeight: 1.5,
                  },
                }}
              >
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography>
                    We strive to be the best in service and support delivery to
                    our clients
                  </Typography>
                </Box>
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography>
                    Incorporated in 2020, ZIRCONTRUST Ltd is licensed by SEC and
                    FMDQ
                  </Typography>
                </Box>
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography>
                    SOPURA BUSINESS CONCEPT is a financial service provider with
                    exclusivity in inter-dealer broking of financial instruments
                    between dealers and financial institutions.
                  </Typography>
                </Box>
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography>
                    We act as financial intermediaries in the markets working to
                    facilitate seamless transactions between broker/dealers or
                    Market Makers in the Nigeria Financial market.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* What We Do Section */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={5}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <Briefcase size={28} color="#55b24a" style={{ marginRight: 8 }} />
              <Typography
                variant="h4"
                fontWeight="bold"
                className="underline"
                pb={1}
              >
                What We Do
              </Typography>
            </Box>

            <Box
              component={'article'}
              bgcolor={'rgba(84, 178, 74, 0.15)'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                pl: 3,
                pr: 3,
                pt: 3,
                pb: 7,

                // border: '2px solid',
                // borderColor: colors.primary,
                borderRadius: 2,

                order: 1,
                flexBasis: {
                  xs: '100%',
                },
              }}
            >
              <Box
                component={'ul'}
                sx={{
                  flexBasis: {
                    xs: '100%',
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  alignItems: 'flex-start',

                  p: 3,
                  gap: {
                    xs: 1,
                    md: 3,
                  },
                  ' > * ': {
                    fontSize: {
                      xs: '14px',
                      md: '18px',
                    },
                    lineHeight: 1.5,
                  },
                }}
              >
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography textAlign={'left'}>
                    We provide information, liquidity and anonymity as we
                    facilitate trade between our clients.
                  </Typography>
                </Box>
                <Box
                  component={'li'}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <Box>
                    <CircleCheckBig size={28} color={colors.primary} />
                  </Box>
                  <Typography textAlign={'left'}>
                    Sopura has a commitment to enhancing price discovery
                    and transparency between clients’ interest and transactions
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  flexBasis: {
                    xs: '100%',
                    md: '50%',
                  },
                }}
              >
                <Grid container spacing={4}>
                  {[
                    'Providing anonymity and confidentialty',
                    'Facilitating information flow',
                    'Creating a more efficient market dynamics',
                    'Facilitating enhanced liquidity',
                  ].map((title, index) => (
                    <Grid
                      size={{ xs: 12, md: 4 }}
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 1,
                          textAlign: 'center',
                          transition: '0.3s',
                          '&:hover': { boxShadow: 6 },
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#55b24a20',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2,
                          }}
                        >
                          {index === 0 && (
                            <ShieldQuestion color={colors.primary} />
                          )}
                          {index === 1 && (
                            <CloudLightning color={colors.primary} />
                          )}
                          {index === 2 && <ChartLine color={colors.primary} />}
                          {index === 3 && (
                            <ChartCandlestick color={colors.primary} />
                          )}
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="textPrimary"
                          gutterBottom
                        >
                          {title}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>

          {/* ! Vision and Mission */}

          <VisionMission />
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: '#55b24a',
          py: 6,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Work with Us?
          </Typography>
          <Typography variant="h6" maxWidth="md" mx="auto" mb={4}>
            Join us in our mission to create innovative solutions for a better
            tomorrow.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: '#55b24a',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default Aboutpage
