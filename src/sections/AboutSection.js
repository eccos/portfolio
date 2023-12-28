import { Link, Stack, Typography } from '@mui/material';

import GitHubLogo from '../app/assets/img/techLogos/logo-github.svg';
import LinkedInLogo from '../app/assets/img/techLogos/logo-linkedin.png';

export default function AboutSection() {
  return (
    <>
      <Stack direction={'row'} spacing={2} mt={5}>
        <Typography
          variant="h3"
          sx={{
            alignSelf: 'end',
            color: 'primary.main',
            borderBottom: 1,
            borderColor: 'secondary.main',
          }}
        >
          Luis Delamora
        </Typography>
        <Stack alignSelf={'end'}>
          <Link href="https://linkedin.com/in/luis-delamora">
            <img
              src={LinkedInLogo}
              width={38}
              height={38}
              alt="LinkedIn Logo"
            />
          </Link>
          <Link href="https://github.com/eccos">
            <img src={GitHubLogo} width={38} height={38} alt="GitHub Logo" />
          </Link>
        </Stack>
      </Stack>
      <Typography variant="overline" sx={{ color: 'secondary.main' }}>
        Full Stack Web Developer
      </Typography>
      <Typography variant="body1">
        Over 5 years of experience in front-end & back-end technologies creating
        responsive, accessible, intuitive, and frustration-free websites with
        stylish designs.
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Constantly self-improving by absorbing the latest software technology
        and techniques.
      </Typography>
    </>
  );
}
