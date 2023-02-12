import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Body() {
    return <List>
        <ListItem>
            <Box border={1}>1</Box>
        </ListItem>
        <ListItem>
            <Box border={1}>2</Box>
        </ListItem>
        <ListItem>
            <Box border={1}>3</Box>
        </ListItem>
    </List>;
}
