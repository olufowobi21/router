import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import MovieDescription from './MovieDescription';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<MovieDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;