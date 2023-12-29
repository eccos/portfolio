import { Link, Paper, Stack } from '@mui/material';
import { CERTS } from '../app/shared/CERTS';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

export default function EducationSection({ label }) {
  const certs = CERTS;

  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      <Paper elevation={3} sx={{ padding: 2, bgcolor: 'primary.light' }}>
        <Stack direction="row" spacing={2} overflow={'auto'}>
          {certs.map((cert) => (
            <Link key={cert.img} href={cert.pdf} target="_blank">
              <motion.img
                src={cert.img}
                alt={cert.title}
                loading="lazy"
                style={{ width: 200 }}
                initial={{ rotateZ: 0, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{
                  rotateZ: [-2, 2, -2, 2, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              />
            </Link>
          ))}
        </Stack>
      </Paper>
    </>
  );
}
