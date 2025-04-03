import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import {TeamMemberCard} from './TeamMembersCard'
import { teamMembers } from '../data/teamMembers'
export const TeamSection = () => {
  return (
    <Container
      id={'team'}
      maxWidth="lg"
      sx={{
        py: 8,
      }}
    >
      <Box
        sx={{
          mb: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
          }}
        >
          Our Team
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        {teamMembers.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.id}>
            <TeamMemberCard
              member={member}
              aosValue={member['data-aos']}
              aosAnchorPlacement={member['data-aos-anchor-placement']}
              aosDuration={member['data-aos-duration']}
            />
          </Grid>
        ))}
      </Box>
    </Container>
  )
}
