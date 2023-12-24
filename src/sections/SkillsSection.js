import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import SectionHeader from '../components/SectionHeader';

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
    technologies: ['JavaScript', 'HTML', 'CSS'],
    experience: 80,
  },
  {
    name: 'Back-End',
    technologies: ['Node.js', 'ColdFusion', 'PHP', 'JSP', 'Java', 'C# .NET'],
    experience: 60,
  },
  {
    name: 'Frameworks & Libraries',
    technologies: [
      'React.js',
      'React Native',
      'Bootstrap/Reactstrap',
      'React Router',
      'Redux.js',
      'Formik',
      'jQuery',
    ],
    experience: 60,
  },
  {
    name: 'Supporting Tech',
    technologies: [
      'Google Firebase',
      'SQL',
      'GIT/GitHub',
      'Async API Calls (XML/JSON)',
      'AJAX',
    ],
    experience: 80,
  },
  {
    name: 'Tools and Utilities',
    technologies: ['NPM', 'Jira', 'Jenkins', 'Postman', 'Windows/Unix CLI'],
    experience: 90,
  },
  {
    name: 'Testing Automation',
    technologies: [
      'Certified Tricentis Tosca Engineer Test Design and Automation Specialist (Nov 2021)',
    ],
    experience: 80,
  },
];

export default function SkillsSection({ label }) {
  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      {skills.map((skill) => (
        <Card sx={{ minWidth: 275 }} variant="outlined">
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
              {skill.technologies.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
