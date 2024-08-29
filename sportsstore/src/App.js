import React, { useState } from 'react';
import SignIn from './SignIn/SignIn';
import Home from './Home/Home';
import ProductList from './Product/ProductList';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onSignOut={handleSignOut} />;
      case 'products':
        return <ProductList />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onSignOut={handleSignOut} />;
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Navbar onSignOut={handleSignOut} setPage={setCurrentPage} />
          {renderPage()}
          <Footer/>
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;
