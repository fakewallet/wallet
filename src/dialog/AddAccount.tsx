import { Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function AddAccount(props: any) {
    const def = { name: 'Account', address: '', label: 'red' };
    const { dialog, DIALOG }: { dialog: boolean; DIALOG: (value: boolean) => void } = props;
    const { callback }: { callback: (address: string, name: string, label: string) => void } = props;
    const [name, NAME] = useState(def.name);
    const [address, ADDRESS] = useState(def.address);
    const [label, LABEL] = useState(def.label);
    return <>
        <Dialog open={dialog} onClose={() => { DIALOG(false) }}>
            <DialogTitle>Add Account</DialogTitle>
            <DialogContent>
                <TextField
                    variant="standard"
                    fullWidth
                    autoFocus
                    margin="dense"
                    label="name"
                    value={name}
                    onChange={(evt) => { NAME(evt.target.value) }}
                />
                <TextField
                    variant="standard"
                    fullWidth
                    margin="dense"
                    label="address"
                    value={address}
                    onChange={(evt) => { ADDRESS(evt.target.value) }}
                />
                <Select
                    variant="standard"
                    fullWidth
                    margin="dense"
                    label="label"
                    value={label}
                    onChange={(evt) => { LABEL(evt.target.value) }}
                >
                    <MenuItem value='red'>
                        <Typography color='red'>Unknown Secret</Typography>
                    </MenuItem>
                    <MenuItem value='blue'>
                        <Typography color='blue'>Shared Secret</Typography>
                    </MenuItem>
                    <MenuItem value='green'>
                        <Typography color='green'>Safe Secret</Typography>
                    </MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        DIALOG(false);
                        callback(address, name, label);
                        NAME(def.name);
                        ADDRESS(def.address);
                        LABEL(def.label);
                    }}
                >
                    OK
                </Button>
                <Button
                    onClick={() => {
                        DIALOG(false);
                        NAME(def.name);
                        ADDRESS(def.address);
                        LABEL(def.label);
                    }}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    </>;
}