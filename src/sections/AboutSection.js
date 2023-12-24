import { Link, Stack, Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <>
      <Stack direction={'row'} spacing={2}>
        <Typography variant="h3" flex={1}>
          Luis Delamora
        </Typography>
        <Typography variant="subtitle2" alignSelf={'end'}>
          <Link href="https://linkedin.com/in/luis-delamora">LinkedIn</Link> |{' '}
          <Link href="https://github.com/eccos">GitHub</Link>
        </Typography>
      </Stack>
      <Typography variant="overline">Full Stack Web Developer</Typography>
      <Typography variant="body1">
        Over 5 years of experience in front-end & back-end technologies creating
        responsive, accessible, intuitive, and frustration-free websites with
        stylish designs.
      </Typography>
      <Typography variant="body2">
        Constantly self-improving by absorbing the latest software technology
        and techniques.
      </Typography>
    </>
  );
}
