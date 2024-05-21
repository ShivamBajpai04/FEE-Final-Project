// /src/components/Layout.js
import React from 'react';
import { Navbar, Footer } from './';
import { Box } from '@mui/material';

const Layout = ({ children }) => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    {children}
    <Footer />
  </Box>
);

export default Layout;
