import React, { useState } from 'react';
import { Header, Footer } from './components/LayoutComponents';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { businessData } from './data/dummyData';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'products':
        return <ProductsPage />;
      case 'services':
        return <ServicesPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <div className="flex-grow-1">
        {renderPage()}
      </div>
      <Footer businessData={businessData} />
    </div>
  );
}

export default App;
