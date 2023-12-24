import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { PROJECTS } from '../app/shared/PROJECTS';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsSection({ label }) {
  const projects = PROJECTS;

  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{ maxWidth: 345, marginBottom: 1 }}
          variant="outlined"
        >
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
      ))}
    </>
  );
}
