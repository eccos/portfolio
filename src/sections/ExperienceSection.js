import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import SectionHeader from '../components/SectionHeader';

export default function ExperienceSection({ label }) {
  return (
    <>
      <SectionHeader>{label}</SectionHeader>
      <Timeline>
        {employmentData.map((data, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent>
              {data.dateStart} - {data.dateEnd} 📅
              <br />
              {data.position} 💻
              <br />
              {data.employer} 🏢
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                color={i % 2 === 0 ? 'primary' : 'secondary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="text.secondary">
              🛠 {data.skills.join(', ')}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}

const employmentData = [
  {
    position: `Test Automation Engineer`,
    employer: `Cayuse Commercial Services`,
    dateStart: `Nov 2021`,
    dateEnd: `Jul 2023`,
    skills: ['Tricentis Tosca', 'Powershell', 'GE ADMS', 'Test Automation'],
    summary: `Developed exhaustive end-to-end automated test scripts leveraging
      Tosca for a large utility company’s power grid management system involving
      complex logic. Engineered reusable modules for critical business paths to
      increase scalability of test cases and reduce manual testing efforts >70%.
      Extended missing test automation software functionality by building
      PowerShell scripts which opened 20% of previously blocked test cases.
      Commanded a lead role when one was missing. Became a bridge between
      multiple teams and guided my team on expectations and obtained answers to
      questions and discrepancies.`,
  },
  {
    position: `Web Dev & Manual Tester`,
    employer: `Cayuse Commercial Services`,
    dateStart: `May 2015`,
    dateEnd: `Nov 2021`,
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'SQL',
      'Adobe ColdFusion',
      'JSP',
      'Async API Calls (XML/JSON)',
      'AJAX',
      'Postman',
      'GitHub',
      'Git',
      'Jenkins',
      'Bootstrap',
      'jQuery',
      'DataTables',
      'Windows/Unix CLI',
    ],
    summary: `Fulfilled many roles at a giant telecom
      company with various accomplishments. Web Dev Project #1: Maintained and
      improved a web application to rapidly accelerate IVR (Interactive Voice
      Response) testing by providing a GUI for database operations, calculating
      decibel levels of audio files and the ability to play them in-browser,
      consolidating logs from multiple servers into a single place with added
      formatting, color coding, and filtering capabilities. Web Dev Project #2:
      Co-developed a web application to vastly decrease IVR app development time
      by generating VXML IVR code derived from a call flow diagram that a user
      draws in browser via a drag/drop interface. Implemented TTS &
      Flesch-Kincaid reading grade levels. Generated proprietary reports and
      test cases to reduce business processes and AQA testing time. Manual
      Testing: Verified audio files, corrected phrasing & grammar, ensured path
      traversal and metric data logged. Wrote test plans, test cases, defects,
      knowledge transfer documentation, and reports. Utilized Postman to build
      and send requests to 3rd party APIs to verify responses according to
      technical documentation. Set up 3rd party API simulators on servers when
      3rd party APIs were not available.`,
  },
  {
    position: `Mobile App Tester`,
    employer: `Cayuse Commercial Services`,
    dateStart: `Dec 2013`,
    dateEnd: `Apr 2015`,
    skills: [
      'Defect Life Cycle',
      'Technical Documentation',
      'Test Plan Creation',
      'Reporting',
    ],
    summary: `Verified banking app specifications at a
      large Finance and Banking Institution. Processed user stories &
      requirements to create test cases using the Gherkin syntax. Tested
      functionality, look & feel, and content on Android and iOS devices of
      varying versions and sizes on both physical and emulated devices.`,
  },
];
