import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDosItem = () => (
  <section>
    <ul>
      <li className="todoitem">
        <button className="checkBtn"><FontAwesomeIcon icon="check" size="" /></button>
        <h2>Item Name</h2>
        <p>Description</p>
        <button className="deleteBtn"><FontAwesomeIcon icon="times" size="" /></button>
      </li>
      <li className="todoitem">
        <button className="checkBtn"><FontAwesomeIcon icon="check" size="" /></button>
        <h2>Einkaufen</h2>
        <p>Bannen, Brot, Eier, Milch, Käse, Kaffee, Bier, Nudeln, Klopapier</p>
        <button className="deleteBtn"><FontAwesomeIcon icon="times" size="" /></button>
      </li>
    </ul>
  </section>
);
export default ToDosItem;
