import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import PrivateRoute from './components/PrivateRoute/index.jsx';
import Error from './pages/Error/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
