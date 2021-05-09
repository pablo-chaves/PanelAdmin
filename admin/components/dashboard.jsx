import { Box, Text } from '@admin-bro/design-system';
import colors from '../../utils/colors.jsx';

const Dashboard = () => {
  return (
    <Box variant="grey">
      <Box>
        <Text className='name-panel'>Admin Panel</Text>
      </Box>
      <Box className='title-container'>
        <Text className='subtitle-dashboard'>Welcome to</Text>
        <Text className='title-dashboard'>My House-App <span>Admin Panel</span></Text>
      </Box>
      <Box className='img-dashboard'>
        <img src='https://raw.githubusercontent.com/lavalbuena357/central/main/client/src/images/newLogos/logoCirculo.png'/>
      </Box>
    </Box>
  )
};

export default Dashboard;
