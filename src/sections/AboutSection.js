import { Link, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import GitHubLogo from '../app/assets/img/techLogos/logo-github.svg';
import LinkedInLogo from '../app/assets/img/techLogos/logo-linkedin.png';

export default function AboutSection() {
  const logo = {
    initial: { x: 100, rotateZ: 0, opacity: 0 },
    slide: { x: 0, opacity: 1 },
    shake: {
      rotateZ: [-20, 20, -20, 20, 0],
      scale: 1.2,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Stack direction={'row'} spacing={2}>
        <Typography
          variant="h3"
          sx={{
            alignSelf: 'end',
            color: 'primary.main',
            borderBottomColor: 'secondary.main',
            borderBottomWidth: '10px',
            borderBottomStyle: 'solid',
          }}
          component={motion.div}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Luis Delamora
        </Typography>
        <Stack alignSelf={'end'}>
          <Link href="https://linkedin.com/in/luis-delamora">
            <motion.img
              src={LinkedInLogo}
              width={38}
              height={38}
              alt="LinkedIn Logo"
              initial="initial"
              whileInView="slide"
              whileHover="shake"
              variants={logo}
            />
          </Link>
          <Link href="https://github.com/eccos">
            <motion.img
              src={GitHubLogo}
              width={38}
              height={38}
              alt="GitHub Logo"
              initial="initial"
              whileInView="slide"
              whileHover="shake"
              variants={logo}
            />
          </Link>
        </Stack>
      </Stack>
      <Typography
        variant="overline"
        sx={{ color: 'secondary.main' }}
        component={motion.div}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Full Stack Web Developer
      </Typography>
      <Typography
        variant="body1"
        component={motion.div}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Over 5 years of experience in front-end & back-end technologies creating
        responsive, accessible, intuitive, and frustration-free websites with
        stylish designs.
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary' }}
        component={motion.div}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Constantly self-improving by absorbing the latest software technology
        and techniques.
      </Typography>
    </>
  );
}
