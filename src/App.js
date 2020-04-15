import React from 'react';
import ToDoList from './components/ToDoList';
import './style.min.css';

//    FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

//    ADD ICONS TO LIBRARY HERE
library.add(fab, faCheck, faTimes, faPlus);

function App() {

  return (
    <div>
      <ToDoList />
    </div>
  );
}

export default App;
