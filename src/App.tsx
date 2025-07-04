import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetails';
import Header from './components/Header';
import './app.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

