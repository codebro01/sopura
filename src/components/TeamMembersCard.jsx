'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
  styled,
} from '@mui/material'
import {
  ExpandMore,
  ExpandLess,
  BusinessCenter,
  School,
} from '@mui/icons-material'
import { UseTheme } from '../../UseTheme'

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: theme.shadows[5],

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
}))
export const TeamMemberCard = ({ member, aosValue, aosAnchorPlacement, aosDuration }) => {
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const colors = UseTheme()
  return (
    <StyledCard
      data-aos={aosValue}
      data-aos-anchor-placement={aosAnchorPlacement}
      data-aos-duration={aosDuration}
    >
      {/* <CardMedia
        component="img"
        height="240"
        image={member.image}
        alt={member.name}
        sx={{
          objectFit: 'cover',
        }}
      /> */}
      <CardContent
        sx={{
          flexGrow: 1,
          pb: 0,
        }}
      >
        <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
          {member.name}
        </Typography>
        <Typography
          color="primary"
          fontWeight="medium"
          sx={{
            mb: 1,
          }}
        >
          {member.position}
        </Typography>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography
            sx={{
              mb: 1,
            }}
          >
            <strong>Expertise:</strong>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.5,
            }}
          >
            {member.expertise.map((skill, index) => (
              <Typography
                key={index}
                sx={{
                  mb: 0.5,
                  fontFamily: 'Kanit',
                  color: 'primary',
                }}
              >
                {skill}
              </Typography>
            ))}
          </Box>
        </Box>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{
            mt: 2,
          }}
        >
          <Divider
            sx={{
              my: 2,
            }}
          />
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <BusinessCenter
                sx={{
                  mr: 1,
                  fontSize: 20,
                }}
              />{' '}
              Work Experience
            </Typography>
            <List dense disablePadding>
              {member.experience.map((exp, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    mb: 1,
                  }}
                >
                  <ListItemText
                    primary={exp.role}
                    secondary={
                      <>
                        <Typography component="span" ml={'20px'}>
                          {exp.company}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            ml: '30px',
                          }}
                        >
                          {` • ${exp.period}`}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography
              fontWeight="bold"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <School
                sx={{
                  mr: 1,
                  fontSize: 20,
                }}
              />{' '}
              Education
            </Typography>
            <List dense disablePadding>
              {member.education.map((edu, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    mb: 1,
                  }}
                >
                  <ListItemText
                    primary={edu.degree}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          sx={{
                            marginLeft: '20px',
                          }}
                        >
                          {edu.institution}
                        </Typography>
                        <Typography
                          sx={{
                            marginLeft: '30px',
                            fontSize: '13px',
                          }}
                        >{` • ${edu.year}`}</Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Collapse>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Button
          onClick={handleExpandClick}
          variant="outlined"
          color="primary"
          startIcon={expanded ? <ExpandLess /> : <ExpandMore />}
          sx={{
            width: '100%',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
            },
          }}
        >
          {expanded ? 'Show Less' : 'View Full Resume'}
        </Button>
      </Box>
    </StyledCard>
  )
}
