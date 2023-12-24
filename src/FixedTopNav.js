import { useState } from 'react';

import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';

function FixedTopNav({ sections }) {
  const [value, setValue] = useState(0);

  return (
    <AppBar id="top-nav-container" position="sticky" sx={{ top: 0 }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Tabs
          value={value}
          onChange={(_, val) => setValue(val)}
          centered
          textColor={'white'}
          indicatorColor={'secondary'}
        >
          {sections.map((section) => (
            <Tab
              key={section.label}
              label={section.label}
              icon={section.icon}
              href={'#' + section.label}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default FixedTopNav;
