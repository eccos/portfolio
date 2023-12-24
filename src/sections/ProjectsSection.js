import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
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
          <Grid item key={project.id}>
            <Card sx={{ maxWidth: 335 }} variant="outlined">
              <CardActionArea href={project.githubUrl}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.img}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.descShort}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
