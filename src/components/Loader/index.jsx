/**
 *
 * Loader
 *
 */
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
