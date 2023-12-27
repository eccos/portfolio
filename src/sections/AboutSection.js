import { Link, Stack, Typography, useTheme } from '@mui/material';

import GitHubLogo from '../app/assets/img/techLogos/logo-github.svg';
import LinkedInLogo from '../app/assets/img/techLogos/logo-linkedin.png';

export default function AboutSection() {
  const theme = useTheme();

  return (
    <>
      <Stack direction={'row'} spacing={2} marginTop={5}>
        <Typography
          variant="h3"
          flex={1}
          borderBottom={1}
          borderColor={theme.palette.secondary.main}
          color={theme.palette.primary.main}
        >
          Luis Delamora
        </Typography>
        <Stack alignSelf={'end'}>
          <Link href="https://linkedin.com/in/luis-delamora">
            <img src={LinkedInLogo} width={38} height={38} />
          </Link>
          <Link href="https://github.com/eccos">
            <img src={GitHubLogo} width={38} height={38} />
          </Link>
        </Stack>
      </Stack>
      <Typography variant="overline" color={theme.palette.primary.main}>
        Full Stack Web Developer
      </Typography>
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
