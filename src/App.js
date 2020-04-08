import React from 'react';
import Header from './components/Header';
import ToDosItem from './components/ToDosItem';

import './style.min.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <ToDosItem />
      </main>
    </div>
  );
}

export default App;
