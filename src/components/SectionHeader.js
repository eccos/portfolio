import { Box, Typography } from '@mui/material';

export default function SectionHeader({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 3,
      }}
    >
      <Box
        sx={{
          width: '10%',
          height: '1px',
          bgcolor: 'secondary.main',
        }}
      ></Box>
      <Typography variant="h4" sx={{ mx: 2, color: 'primary.main' }}>
        {children}
      </Typography>
      <Box
        sx={{
          width: '90%',
          height: '1px',
          bgcolor: 'secondary.main',
        }}
      ></Box>
    </Box>
  );
}
