import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Home(props: { accounts: { address: string; name: string; label: string }[] }) {
    const { accounts } = props;
    return <>
        <Box border={4} m={4} mb={0}>
            <Typography variant='h4' textAlign='center' fontFamily='monospace'>ACCOUNTS</Typography>
        </Box>
        <Box border={4} m={4} mt={0}>
            <List>
                {
                    accounts.map(({ address, name, label }, index) => <ListItem
                        dense
                        button
                        key={index}
                        secondaryAction={
                            <>
                                <IconButton onClick={() => navigator.clipboard.writeText('ok')}><ContentCopyIcon /></IconButton>
                                <IconButton><DeleteIcon /></IconButton>
                            </>
                        }>
                        <ListItemText primary={name} secondary={address} primaryTypographyProps={{ fontFamily: 'monospace', color: label }} secondaryTypographyProps={{ fontFamily: 'monospace', color: label }} />
                    </ListItem>)
                }
            </List>
        </Box>
    </>;
}