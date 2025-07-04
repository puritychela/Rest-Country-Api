import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetails';
import Header from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors dark:bg-gray-900 dark:text-white">
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


