import { ApiClient } from 'admin-bro';
import { useState, useEffect } from 'react'; 
import { Box, Label, Button, Loader, Text } from '@admin-bro/design-system';
import colors from '../utils/colors.jsx'

const api = new ApiClient()

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    api.getDashboard().then((response) => {
      setData(response.data)
    })
  }, [])
  console.log(colors)
  return (
    <Box variant="grey">
      <Box>
        <Text fontSize='default' color='grey70'>Admin Panel</Text>
      </Box>
      <Box variant="white">
        <Text fontSize='xl' fontWeight='normal' color={colors.blue} paddingTop='10px'>Welcome to</Text>
        <Text fontSize='h2' fontWeight='normal' color='grey80' paddingTop='10px'>My House-App</Text>
      </Box>
    </Box>
  )
}

export default Dashboard