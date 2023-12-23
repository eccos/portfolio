import { useState } from 'react';

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function FixedBottomNavigation({ sections }) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="bottom-nav-container" sx={{ pb: 7 }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '& .MuiBottomNavigationAction-root': {
              minWidth: 60,
            },
          }}
          showLabels={!isSmallScreen}
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          {sections.map((section) => (
            <BottomNavigationAction
              key={section.label}
              label={section.label}
              icon={section.icon}
              href={'#' + section.label}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
