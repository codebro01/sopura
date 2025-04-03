// "use client"

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material'
import { Visibility, Adjust, MyLocation } from '@mui/icons-material'


const VisionMission = () => {
  return (
    <Box py={8} px={2}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Vision */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: '#55b24a0D',
                borderLeft: '4px solid #55b24a',
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Visibility
                    sx={{ color: '#55b24a', mr: 1 }}
                    fontSize="large"
                  />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    Our Vision
                  </Typography>
                </Box>

                <Typography color="text.secondary">
                  To be the Gateway to Africa’s financial market Hub bridging
                  the gap with tailor made solutions
                </Typography>
                {/* <List sx={{ mt: 2 }}>
                  {[
                    'Global reach with local impact',
                    'Pioneering sustainable practices',
                    'Setting new industry standards',
                  ].map((text, index) => (
                    <ListItem
                      key={index}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <ListItemIcon>
                        <Adjust sx={{ color: '#55b24a' }} />
                      </ListItemIcon>
                      <Typography color="text.secondary">{text}</Typography>
                    </ListItem>
                  ))}
                </List> */}
              </CardContent>
            </Card>
          </Grid>

          {/* Mission */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: '#55b24a0D',
                borderLeft: '4px solid #55b24a',
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <MyLocation
                    sx={{ color: '#55b24a', mr: 1 }}
                    fontSize="large"
                  />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    Our Mission
                  </Typography>
                </Box>

                <Typography color="text.secondary">
                  To iteratively scale through a sustained business model by
                  operating at market efficient levels while delivering
                  consistent value and service to our stakeholders.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default VisionMission
