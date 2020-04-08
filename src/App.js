import React from 'react';
import Header from './components/Header';
import ToDosItem from './components/ToDosItem';
import './style.min.css';

//    FONT AWESOME
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

//    ADD ICONS TO LIBRARY HERE
library.add(fab, faCheck, faTimes, faPlus);

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
