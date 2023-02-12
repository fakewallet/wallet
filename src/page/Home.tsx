import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import WalletIcon from '@mui/icons-material/Wallet';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import AddAccount from '../dialog/AddAccount';

export default function Home(props: any) {
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
                                <AddIcon />
                            </IconButton>
                        </>
                    }
                >
                    <ListItemIcon>
                        <WalletIcon />
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
                                    <ContentCopyIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => {
                                        ACCOUNTS(accounts.filter((...[, i]) => i !== index));
                                    }}
                                >
                                    <DeleteIcon />
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
            callback={(address: string, name: string, label: string) => {
                console.log(address, name, label);
            }}
        />
    </>;
}