import { Box, Typography } from '@mui/material';

export default function SectionHeader({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 3,
      }}
    >
      <Box
        sx={{
          width: '10%',
          height: 10,
          bgcolor: 'secondary.main',
        }}
      ></Box>
      <Typography
        variant="h4"
        sx={{ marginLeft: 2, marginRight: 2, color: 'primary.main' }}
      >
        {children}
      </Typography>
      <Box
        sx={{
          width: '90%',
          height: 10,
          bgcolor: 'secondary.main',
        }}
      ></Box>
    </Box>
  );
}
