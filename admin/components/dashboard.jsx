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
        <Text className='title-dashboard'>My House-App</Text>
      </Box>
    </Box>
  )
};

export default Dashboard;
