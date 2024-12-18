// components/StepsSection.js
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

export default function StepsSection() {
  return (
    <Box position="relative" sx={{ py: 6, backgroundColor: '#fff', overflow: 'hidden' }}>
      {/* Decorative SVG Line */}
      <Box
        component="svg"
        viewBox="0 0 800 200"
        sx={{
          position: 'absolute',
          top: 30,
          left: 0,
          right: 0,
          mx: 'auto',
          width: '100%',
          zIndex: -1,
        }}
      >
        <path
          stroke="#ccc"
          strokeWidth="2"
          strokeDasharray="8 5"
          d="M0 100 C200 0, 600 200, 800 100"
        />
      </Box>

      {/* Steps */}
      <Box display="flex" justifyContent="space-around" alignItems="center" textAlign="center">
        {/* Step 1 - Strategy */}
        <Box>
          <Avatar
            alt="Strategy"
            src="/images/strategy.jpg"
            sx={{
              width: 128,
              height: 128,
              border: '4px solid #e0e0e0',
              margin: '0 auto',
            }}
          />
          <Typography variant="h6" sx={{ mt: 2, color: 'gray' }}>
            Strategy
          </Typography>
        </Box>

        {/* Step 2 - Planning */}
        <Box>
          <Avatar
            alt="Planning"
            src="/images/planning.jpg"
            sx={{
              width: 128,
              height: 128,
              border: '4px solid #e0e0e0',
              margin: '0 auto',
            }}
          />
          <Typography variant="h6" sx={{ mt: 2, color: 'gray' }}>
            Planning
          </Typography>
        </Box>

        {/* Step 3 - Build */}
        <Box>
          <Avatar
            alt="Build"
            src="/images/build.jpg"
            sx={{
              width: 128,
              height: 128,
              border: '4px solid #e0e0e0',
              margin: '0 auto',
            }}
          />
          <Typography variant="h6" sx={{ mt: 2, color: 'gray' }}>
            Build
          </Typography>
        </Box>

        {/* Step 4 - Our Work */}
        <Box>
          <Avatar
            alt="Our Work"
            src="/images/our-work.jpg"
            sx={{
              width: 192,
              height: 192,
              border: '4px solid #e0e0e0',
              boxShadow: 3,
              margin: '0 auto',
            }}
          />
          <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold', color: 'black' }}>
            Our Work
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
