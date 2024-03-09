import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Tooltip from '@mui/material/Tooltip';

const UserIcon = () => {
  return (
    <Tooltip title="Create Account" placement="bottom">
      <Avatar sx={{ bgcolor: 'inherit', color: 'inherit' }} variant="square">
        <AccountBoxIcon />
      </Avatar>
    </Tooltip>
  );
}

export default UserIcon;
