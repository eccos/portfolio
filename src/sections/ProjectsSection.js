import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { PROJECTS } from '../app/shared/PROJECTS';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsSection({ label }) {
  const projects = PROJECTS;

  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.id} item xs="12" sm="6" lg="4">
            <Card
              variant="outlined"
              sx={{
                minWidth: 275,
                height: '100%',
                borderColor: 'secondary.main',
              }}
            >
              <CardActionArea href={project.githubUrl} sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={project.img}
                  alt={project.title}
                />
                <CardHeader
                  title={project.title}
                  sx={{
                    color: 'secondary.dark',
                    borderBottom: 1,
                    borderColor: 'primary.main',
                  }}
                />
                <CardContent
                  sx={{
                    color: 'text.secondary',
                    height: '100%',
                  }}
                >
                  <Typography variant="body2">{project.descShort}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
