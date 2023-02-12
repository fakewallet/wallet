import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import Home from './page/Home';
import { useState } from 'react';

export default function App() {
  const [selected, SELECTED] = useState(0);
  const [maindata, MAINDATA] = useState([{ render: Home }, { render: Home }]);
  console.log(MAINDATA)
  // const [accounts, ACCOUNTS] = useState([]);
  return <>
    <Box display='flex' justifyContent='center'>
      <Tabs
        value={selected}
        onChange={(...[, value]) => SELECTED(value)}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {
          maindata.map(({ render }: { render: () => JSX.Element; }, index: number) => {
            switch (render) {
              case Home:
                return <Tab icon={<HomeIcon />} key={index} />;
              default:
                throw new Error('error maindata type');
            }
          })
        }
      </Tabs>
    </Box>
    {maindata[selected].render()}
  </>;
}
