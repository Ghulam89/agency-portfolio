// components/FeaturesSection.js
import { Grid, Typography, Box } from '@mui/material';
import { Code, AccessTime, VerifiedUser, BuildCircle } from '@mui/icons-material';
import feature from '../../Assets/company/feature.jpg';
export default function Features() {
  return (
    <Box sx={{ bgcolor: '#3d3d3d', color: 'white', p: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Text Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Feature 1 */}
            <Grid item xs={6}>
              <Code fontSize="large" />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                QUALITY PRODUCTS
              </Typography>
              <Typography variant="body2">
                We believe in Software Quality that is essential to deliver the product on time and with the required quality.
              </Typography>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={6}>
              <AccessTime fontSize="large" />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                TIMELY WORK
              </Typography>
              <Typography variant="body2">
                We always plan the Project Development schedule for deploying the project on time with all requirements.
              </Typography>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={6}>
              <VerifiedUser fontSize="large" />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                RELIABILITY
              </Typography>
              <Typography variant="body2">
                Failure-free products are our main target. We always develop the most reliable products for the future.
              </Typography>
            </Grid>

            {/* Feature 4 */}
            <Grid item xs={6}>
              <BuildCircle fontSize="large" />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                MAINTAINABLE
              </Typography>
              <Typography variant="body2">
                Our products are fully maintainable for adding new functionality or requirements.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side: Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={'/avatars/company/feature.jpg'}
            alt="Laptop with code"
            sx={{
              width: '100%',
              borderRadius: 1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
