import { Link, Stack } from '@mui/material';
import { CERTS } from '../app/shared/CERTS';
import SectionHeader from '../components/SectionHeader';

export default function EducationSection({ label }) {
  const certs = CERTS;

  return (
    <>
      <SectionHeader>{label}</SectionHeader>
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
