import { Link, Stack, Typography } from '@mui/material';
import { CERTS } from '../app/shared/CERTS';

export default function EducationSection({ label }) {
  const certs = CERTS;

  return (
    <>
      <Typography variant="h4">{label}</Typography>
      <Stack direction="row" spacing={2} overflow={'auto'}>
        {certs.map((cert) => (
          <Link key={cert.img} href={cert.pdf} target="_blank">
            <img
              src={cert.img}
              alt={cert.title}
              loading="lazy"
              style={{ width: 200 }}
            />
          </Link>
        ))}
      </Stack>
    </>
  );
}
