import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { PROJECTS } from '../app/shared/PROJECTS';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsSection({ label }) {
  const projects = PROJECTS;
  const theme = useTheme();

  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.id} item xs="12" sm="6" lg="4">
            <Card sx={{ minWidth: 275, height: '100%' }} variant="outlined">
              <CardActionArea href={project.githubUrl}>
                <CardMedia
                  component="img"
                  image={project.img}
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={theme.palette.secondary.main}
                    borderBottom={1}
                    borderColor={theme.palette.primary.main}
                  >
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
