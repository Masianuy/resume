import { Route,BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
// import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.scss';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/*' element={<Layout />}>
            <Route index path='about' element={<About />} />
            <Route path='education' element={<Resume />} />
            <Route path='contact' element={<Contact />} />
            <Route path='resume' element={<HomePage />} />
            <Route path='*' element={<Navigate to='/resume' replace={true} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
