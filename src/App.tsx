import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import Home from './page/Home';
import { useState } from 'react';

export default function App() {
  const [selected, SELECTED] = useState(0);
  const [maindata, MAINDATA] = useState([
    {
      render: Home,
      data: {
        accounts: [
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 1', label: 'red' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
          { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account 2', label: 'green' },
        ]
      },
    },
  ]);
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
          maindata.map(({ render }, index) => {
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
    {maindata[selected].render(maindata[selected].data)}
  </>;
}
