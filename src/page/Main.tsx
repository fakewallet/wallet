import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Delete, Add, Wallet, ContentCopy } from '@mui/icons-material';
import { useState } from 'react';
import { ethers } from "ethers";
import AddAccount from '../dialog/AddAccount';

export default function Main(props: any) {
    const { accounts, ACCOUNTS }: { accounts: { address: string; name: string; label: string }[], ACCOUNTS: (value: any) => void } = props;
    const [addwallet, ADDWALLET] = useState(false);
    return <>
        <Box border={4} m={4}>
            <List>
                <ListItem
                    secondaryAction={
                        <>
                            <IconButton
                                onClick={() => {
                                    ADDWALLET(true);
                                }}
                            >
                                <Add />
                            </IconButton>
                        </>
                    }
                >
                    <ListItemIcon>
                        <Wallet />
                    </ListItemIcon>
                </ListItem>
                {
                    accounts.map(({ address, name, label }, index) => <ListItem
                        dense
                        button
                        key={index}
                        secondaryAction={
                            <>
                                <IconButton
                                    onClick={() => {
                                        navigator.clipboard.writeText(address);
                                    }}
                                >
                                    <ContentCopy />
                                </IconButton>
                                <IconButton
                                    onClick={() => {
                                        ACCOUNTS(accounts.filter((...[, i]) => i !== index));
                                    }}
                                >
                                    <Delete />
                                </IconButton>
                            </>
                        }>
                        <ListItemText primary={name} secondary={address} primaryTypographyProps={{ fontFamily: 'monospace', color: label }} secondaryTypographyProps={{ fontFamily: 'monospace', color: label }} />
                    </ListItem>)
                }
            </List>
        </Box>
        <AddAccount
            dialog={addwallet}
            DIALOG={ADDWALLET}
            callback={(addr: string, name: string, label: string) => {
                try {
                    const address = ethers.getAddress(addr.toLowerCase());
                    ACCOUNTS([...accounts, { address, name, label }]);
                } catch (e) {
                    alert(`FAILED TO LOAD ACCOUNT: ${e}`);
                }
            }}
        />
    </>;
}