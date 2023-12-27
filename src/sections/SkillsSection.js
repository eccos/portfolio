import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
  Chip,
  Grid,
} from '@mui/material';
import SectionHeader from '../components/SectionHeader';

import { ReactComponent as JsIcon } from '../app/assets/img/techLogos/logo-js.svg';
import { ReactComponent as HtmlIcon } from '../app/assets/img/techLogos/logo-html5.svg';
import { ReactComponent as CssIcon } from '../app/assets/img/techLogos/logo-css3.svg';

import { ReactComponent as NodeJsIcon } from '../app/assets/img/techLogos/logo-nodejs-square.svg';

import { ReactComponent as ReactIcon } from '../app/assets/img/techLogos/logo-react.svg';
import { ReactComponent as ReactNativeIcon } from '../app/assets/img/techLogos/logo-react-native.svg';
import { ReactComponent as BootstrapIcon } from '../app/assets/img/techLogos/logo-bootstrap.svg';

import { ReactComponent as GoogleCloudIcon } from '../app/assets/img/techLogos/google-cloud-icon.svg';
import { ReactComponent as GitHubIcon } from '../app/assets/img/techLogos/logo-github.svg';
import { ReactComponent as MongoDbIcon } from '../app/assets/img/techLogos/logo-mongodb-leaf.svg';
import { ReactComponent as VsCodeIcon } from '../app/assets/img/techLogos/logo-visual-studio-code.svg';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const skills = [
  {
    name: 'Front-End',
    technologies: [
      { name: 'JavaScript', icon: <JsIcon /> },
      { name: 'HTML', icon: <HtmlIcon /> },
      { name: 'CSS', icon: <CssIcon /> },
    ],
    experience: 80,
  },
  {
    name: 'Back-End',
    technologies: [
      { name: 'Node.js', icon: <NodeJsIcon /> },
      { name: 'ColdFusion', icon: null },
      { name: 'PHP', icon: null },
      { name: 'JSP', icon: null },
      { name: 'Java', icon: null },
      { name: 'C# .NET', icon: null },
    ],
    experience: 60,
  },
  {
    name: 'Frameworks & Libraries',
    technologies: [
      { name: 'React.js', icon: <ReactIcon /> },
      { name: 'React Native', icon: <ReactNativeIcon /> },
      { name: 'Bootstrap/Reactstrap', icon: <BootstrapIcon /> },
      { name: 'MUI (Material UI)', icon: null },
      { name: 'React Router', icon: null },
      { name: 'Redux.js', icon: null },
      { name: 'Formik', icon: null },
      { name: 'jQuery', icon: null },
    ],
    experience: 60,
  },
  {
    name: 'Supporting Tech',
    technologies: [
      { name: 'Google Cloud & Firebase', icon: <GoogleCloudIcon /> },
      { name: 'GitHub/Git', icon: <GitHubIcon /> },
      { name: 'SQL', icon: null },
      { name: 'Async API Calls (XML/JSON)', icon: null },
      { name: 'AJAX', icon: null },
    ],
    experience: 70,
  },
  {
    name: 'Tools and Utilities',
    technologies: [
      { name: 'NPM', icon: null },
      { name: 'Jira', icon: null },
      { name: 'Jenkins', icon: null },
      { name: 'Postman', icon: null },
      { name: 'Windows/Unix CLI', icon: null },
    ],
    experience: 90,
  },
  {
    name: 'Testing Automation',
    technologies: [
      {
        name: 'Certified Tricentis Tosca Engineer Test Design and Automation Specialist (Nov 2021)',
        icon: null,
      },
    ],
    experience: 80,
  },
];

export default function SkillsSection({ label }) {
  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      <Grid container>
        {skills.map((skill) => (
          <Grid key={skill.name} item xs="12" sm="6" lg="4">
            <Card sx={{ minWidth: 275, height: '100%' }} variant="outlined">
              <CardContent>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={skill.experience}
                  />
                  <Typography variant="h5" component="div">
                    {skill.name}
                  </Typography>
                </Stack>
                <Typography sx={{ mt: 2 }} color="text.secondary">
                  {skill.technologies.map((tech) => (
                    <Chip
                      key={tech.name}
                      variant="outlined"
                      color="primary"
                      icon={tech.icon}
                      label={tech.name}
                      sx={{
                        height: 'auto',
                        '& .MuiChip-label': {
                          display: 'block',
                          whiteSpace: 'normal',
                        },
                        '& .MuiChip-icon': {
                          width: 20,
                          height: 20,
                        },
                      }}
                    />
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
