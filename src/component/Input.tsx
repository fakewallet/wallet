import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import options from '../dev/options';

export default function Input() {
    const [value, VALUE] = useState<string>('');
    return <Box display='flex' alignItems='center'>
        <Box m={1} flexGrow={1}>
            <Autocomplete
                inputValue={value}
                onInputChange={(evt: any, val: string) => VALUE(val)}
                autoHighlight
                clearOnEscape
                freeSolo
                size='small'
                options={options}
                renderInput={args => <TextField {...args} />}
            />
        </Box>
        <Box m={1}>
            <Button variant='outlined'>confirm</Button>
        </Box>
    </Box>;
}
