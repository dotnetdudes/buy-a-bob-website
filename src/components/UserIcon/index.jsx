import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const UserIcon = () => {
  return (
    <Avatar sx={{ bgcolor: 'inherit', color: 'inherit' }} variant="square">
        <AccountBoxIcon />
    </Avatar>
  );
}

export default UserIcon;
