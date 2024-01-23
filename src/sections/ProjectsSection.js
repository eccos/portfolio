import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PROJECTS } from '../app/shared/PROJECTS';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsSection({ label }) {
  const projects = PROJECTS;

  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} lg={4}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                borderColor: 'secondary.main',
              }}
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardContent
                sx={{
                  color: 'text.secondary',
                  height: '100%',
                }}
              >
                <Link href={project.githubUrl}>
                  <CardMedia
                    component="img"
                    image={project.img}
                    alt={project.title}
                    height="140"
                  />
                  <CardHeader
                    title={project.title}
                    sx={{
                      color: 'secondary.dark',
                      borderBottom: 1,
                      borderColor: 'primary.main',
                    }}
                  />
                </Link>
                <Typography variant="body2" mt={2}>
                  {project.descShort}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
