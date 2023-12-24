import { Box, Link, Stack, Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <Box>
      <Stack direction={'row'}>
        <Typography variant="h3">Luis Delamora</Typography>
        <Typography variant="subtitle2">
          <Link href="https://linkedin.com/in/luis-delamora">LinkedIn</Link> |{' '}
          <Link href="https://github.com/eccos">GitHub</Link> |{' '}
          <Link href="https://codepen.io/eccos">CodePen</Link>
        </Typography>
      </Stack>
      <Typography variant="overline">Full-Stack Web Developer</Typography>
      <Typography variant="body1">
        Over 5 years of experience in front-end & back-end technologies,
        creating responsive, accessible, intuitive, and frustration-free
        websites with stylish flair.
      </Typography>
      <Typography variant="body2">
        Constantly self-improving by absorbing the latest software technology
        and techniques.
      </Typography>
    </Box>
  );
}
