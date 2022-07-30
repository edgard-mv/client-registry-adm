import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './Home';

const Routing: React.FC<{}> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routing;
