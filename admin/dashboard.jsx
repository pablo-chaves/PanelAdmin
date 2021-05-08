import { Box, Text } from '@admin-bro/design-system';
import colors from '../utils/colors.js';

const Dashboard = () => {
  return (
    <Box variant="grey">
      <Box>
        <Text fontSize='default' color={colors.blue}>Admin Panel</Text>
      </Box>
      <Box variant="white">
        <Text fontSize='xl' fontWeight='normal' color={colors.dark} paddingTop='10px'>Welcome to</Text>
        <Text fontSize='h2' fontWeight='normal' color={colors.blue} paddingTop='10px'>My House-App</Text>
      </Box>
    </Box>
  )
};

export default Dashboard;