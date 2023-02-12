import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import Home from './page/Home';
import { useState } from 'react';

export default function App() {
  const [selected, SELECTED] = useState(0);
  const [accounts, ACCOUNTS] = useState([
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C0', name: 'my account 0', label: 'red' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C1', name: 'my account 1', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C2', name: 'my account 2', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C3', name: 'my account 3', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C4', name: 'my account 4', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C5', name: 'my account 5', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C6', name: 'my account 6', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C7', name: 'my account 7', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C8', name: 'my account 8', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4C9', name: 'my account 9', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CA', name: 'my account a', label: 'green' },
    { address: '0x3991aCBBD3E6bf973295e1FAad070De97289b4CB', name: 'my account b', label: 'green' },
  ]);
  const [maindata, MAINDATA] = useState([
    {
      render: Home,
      data: {},
    },
  ]);
  console.log(MAINDATA)
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
    {maindata[selected].render({ accounts, ACCOUNTS, selected, SELECTED })}
  </>;
}
