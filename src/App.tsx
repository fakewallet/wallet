import { Box, Tabs, Tab } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Core } from "@walletconnect/core";
import Client, { Web3Wallet } from "@walletconnect/web3wallet";
import Main from './page/Main';

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
      render: Main,
      data: {},
    },
    {
      render: Main,
      data: {},
    },
    {
      render: Main,
      data: {},
    },
  ]);
  const [web3wallet, WEB3WALLET] = useState<Client | undefined>(undefined);
  useEffect(
    () => {
      Web3Wallet.init({
        core: new Core({
          projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
        }),
        metadata: {
          name: "FakeWallet",
          description: "TODO",
          url: "www.walletconnect.com",
          icons: [],
        },
      }).then((val) => {
        WEB3WALLET(val);
      });
    },
    [],
  );
  console.log(MAINDATA, web3wallet);
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
              case Main:
                return <Tab icon={<Home />} key={index} />;
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
