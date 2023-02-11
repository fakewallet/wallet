import Box from '@mui/material/Box';
import Input from './Input';

export default function Main() {
    return <Box display='flex' flexDirection='column' height='100%'>
        <Input />
        <Box border={1} flexGrow={1} />
        <Input />
    </Box>;
}