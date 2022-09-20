import { Route,BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.scss';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/*' element={<Layout />}>
            <Route path='about/*' element={<About />} />
            <Route path='education/*' element={<Resume />} />
            <Route path='contact/*' element={<Contact />} />
            <Route path='error-page' element={<ErrorPage />} />
            <Route path='*' element={<Navigate to='/error-page' replace={true} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
