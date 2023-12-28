import { Container, useMediaQuery, useTheme } from '@mui/material';
import './styles.css';

import FixedBottomNavigation from './FixedBottomNavigation';
import FixedTopNav from './FixedTopNav';

import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

import BusinessIcon from '@mui/icons-material/Business';
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WebIcon from '@mui/icons-material/Web';

const sections = [
  { label: 'About', Component: AboutSection, icon: <HomeIcon /> },
  { label: 'Skills', Component: SkillsSection, icon: <HandymanIcon /> },
  { label: 'Education', Component: EducationSection, icon: <SchoolIcon /> },
  { label: 'Projects', Component: ProjectsSection, icon: <WebIcon /> },
  { label: 'Experience', Component: ExperienceSection, icon: <BusinessIcon /> },
];

export default function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!isSmallScreen && <FixedTopNav sections={sections} />}
      <Container
        id="sections-container"
        my={5}
        disableGutters={isSmallScreen ? true : false}
      >
        {sections.map((section) => (
          <section
            key={section.label}
            id={section.label}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              marginTop: 50,
              marginBottom: 50,
              paddingTop: 50,
              paddingBottom: 50,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 5,
            }}
          >
            <section.Component label={section.label} />
          </section>
        ))}
      </Container>
      {isSmallScreen && <FixedBottomNavigation sections={sections} />}
    </>
  );
}
