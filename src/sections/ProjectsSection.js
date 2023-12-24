import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import { PROJECTS } from '../app/shared/PROJECTS';

export default function ProjectsSection({ label }) {
  const projects = PROJECTS;

  return (
    <>
      <Typography variant="h4">{label}</Typography>
      {projects.map((project) => (
        <Card key={project.id} sx={{ maxWidth: 345 }}>
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
