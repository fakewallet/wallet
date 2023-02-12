import Box from '@mui/material/Box';
import Body from './Body';
import Header from './Header';
import Input from './Input';

export default function Main() {
    return <Box display='flex' flexDirection='column' height='100%'>
        <Box>
            <Header />
        </Box>
        <Box flexGrow={1}>
            <Body />
        </Box>
        <Box>
            <Input />
        </Box>
    </Box>;
}