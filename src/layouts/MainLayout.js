import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppRoutes from '../routes';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <AppRoutes /> {}
      <Footer />
    </>
  );
};

export default MainLayout;