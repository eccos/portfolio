import { Card, CardContent, CardHeader, Chip, Grid } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

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

export default function SkillsSection({ label }) {
  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      <Grid container>
        {skills.map((skill) => (
          <Grid key={skill.name} item xs={12} lg={4}>
            <Card variant="outlined" sx={{ minWidth: 275, height: '100%' }}>
              <CardHeader
                title={skill.name}
                sx={{ bgcolor: 'secondary.main' }}
              />
              <CardContent>
                {skill.technologies.map((tech) => (
                  <Chip
                    key={tech.name}
                    variant="outlined"
                    icon={tech.icon}
                    label={tech.name}
                    color="primary"
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
                    component={motion.div}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const skills = [
  {
    name: 'Front-End',
    technologies: [
      { name: 'JavaScript', icon: <JsIcon /> },
      { name: 'HTML', icon: <HtmlIcon /> },
      { name: 'CSS', icon: <CssIcon /> },
      { name: 'Bootstrap', icon: <BootstrapIcon /> },
      { name: 'Material UI', icon: null },
      { name: 'React.js', icon: <ReactIcon /> },
      { name: 'Redux.js', icon: null },
      { name: 'React Router', icon: null },
      { name: 'React Native', icon: <ReactNativeIcon /> },
      { name: 'React Navigation', icon: null },
      { name: 'Expo', icon: null },
      { name: 'Formik', icon: null },
    ],
    experience: 80,
  },
  {
    name: 'Back-End',
    technologies: [
      { name: 'Node.js', icon: <NodeJsIcon /> },
      { name: 'Express', icon: null },
      { name: 'MongoDB', icon: null },
      { name: 'Mongoose', icon: null },
      { name: 'SQL', icon: null },
      { name: 'Google Cloud & Firebase', icon: <GoogleCloudIcon /> },
      { name: 'ColdFusion', icon: null },
      { name: 'PHP', icon: null },
      { name: 'JSP', icon: null },
    ],
    experience: 60,
  },
  {
    name: 'Tools and Utilities',
    technologies: [
      { name: 'Git', icon: null },
      { name: 'GitHub', icon: <GitHubIcon /> },
      { name: 'Postman', icon: null },
      { name: 'NPM', icon: null },
      { name: 'Jira', icon: null },
      { name: 'Jenkins', icon: null },
      {
        name: 'Certified Tricentis Tosca Engineer Test Design and Automation Specialist (Nov 2021)',
        icon: null,
      },
    ],
    experience: 90,
  },
];
