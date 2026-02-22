import React from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar';
import { Stack } from '@mui/system';
import Feed from './Component/Feed';
import Right from './Component/Right';

const App = () => {
  return (
    <>
      <Navbar />
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
      <Sidebar />
      <Feed />
      <Right />
      </Stack>
    </>
  );
}

export default App