import React from 'react';
import Survey from './Survey.jsx';
import Banner from './Banner.jsx';
import Authors from './Authors.jsx';

const Home = () => (
  <div className="container-fluid">
    <Banner />
    <Survey />
    <Authors />
  </div>
);

export default Home;
