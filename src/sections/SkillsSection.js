import { Box, CircularProgress, Typography } from '@mui/material';

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

export default function SkillsSection() {
  return (
    <>
      Skills Front-end:{' '}
      <CircularProgressWithLabel variant="determinate" value={80} />
      Back-end: <CircularProgressWithLabel variant="determinate" value={60} />
      {`Frontend: JavaScript, HTML, CSS
Frameworks & Libraries: React.js, React Native, Bootstrap/Reactstrap, React Router, Redux.js, Formik, jQuery
Backend: Node.js, ColdFusion, PHP, JSP, Java, C# .NET
Supporting Tech: Google Firebase, SQL, GIT/GitHub, Async API Calls (XML/JSON), AJAX
Tools and Utilities: NPM, Jira, Jenkins, Postman, Windows/Unix CLI
Code Editors: Visual Studio, VS Code, Eclipse
Testing Automation: Certified Tricentis Tosca Engineer Test Design and Automation Specialist (Nov 2021)
`}
    </>
  );
}
