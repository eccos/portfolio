import { Box, Typography, useTheme } from '@mui/material';

export default function SectionHeader({ children }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: '10%',
          height: '1px',
          backgroundColor: theme.palette.secondary.main,
        }}
      ></Box>
      <Typography
        variant="h4"
        sx={{ color: theme.palette.primary.main, mx: 2 }}
      >
        {children}
      </Typography>
      <Box
        sx={{
          width: '90%',
          height: '1px',
          backgroundColor: theme.palette.secondary.main,
        }}
      ></Box>
    </Box>
  );
}
