import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function SectionHeader({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 3,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '10%',
          height: 10,
          bgcolor: 'secondary.main',
        }}
        component={motion.div}
        initial={{ x: '-90%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      />
      <Typography
        variant="h4"
        sx={{ marginLeft: 2, marginRight: 2, color: 'primary.main' }}
        component={motion.div}
        initial={{ rotateX: 0, opacity: 0 }}
        whileInView={{ rotateX: [90, -90, 0], opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {children}
      </Typography>
      <Box
        sx={{
          width: '90%',
          height: 10,
          bgcolor: 'secondary.main',
        }}
        component={motion.div}
        initial={{ x: '90%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      />
    </Box>
  );
}
