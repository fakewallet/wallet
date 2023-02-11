import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {
  return <Grid container justifyContent="center">
    <Grid item xs={12} sm={11} md={10} lg={9} xl={8} display="flex" alignItems="center" height="100vh" p={1}>
      <Box border={1} height="98%" width="100%">
      </Box>
    </Grid>
  </Grid>;
}

export default App;
