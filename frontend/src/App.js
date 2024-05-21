// /src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './utils/RequireAuth';
import Layout from './components/Layout';
import { Home, ExerciseDetail } from './Page';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/exercise/:id" element={<RequireAuth><Layout><ExerciseDetail /></Layout></RequireAuth>} />
        <Route path="/protected" element={<RequireAuth><Layout><ProtectedPage /></Layout></RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
