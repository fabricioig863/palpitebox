import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import useDarkMode from '../../hooks/useDarkMode';

const Layout = ({ children }) => {
  useDarkMode()
  return (
    <div className="dark:bg-gray-900 transition duration-500">
      <Header />
      <div className='container mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;