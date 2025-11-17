import DehazeIcon from '@mui/icons-material/Dehaze';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Typography } from '@mui/material';

interface HeaderProps {
    onToggleSidebar: () => void;
}
export const Header:React.FC<HeaderProps> = ({onToggleSidebar}) => {
  return (
    <Box display="flex" alignItems={'center'}>
        <Box display="flex">
            <Button onClick={onToggleSidebar}><DehazeIcon/></Button>
        </Box>
        <Box display="flex">
            <NotificationsIcon/>
            <PersonIcon/>
            <Typography variant="h6">
                Profile
            </Typography>
        </Box>
    </Box>
  )
}
