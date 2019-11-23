import React, { useState } from 'react';
import { Preview } from './Preview';

export const Sidebar = () => {
  const [element, setElement] = useState([]);

  const handleClick = e => {
    setElement(element => [...element, data[e.target.innerText]]);
  };

  const data = {
    Image: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w&s"
        alt="cat"
      />
    ),
    Text: <h1>Test</h1>,
  };

  return (
    <div className="sidebar">
      Sidebar with item
      <ul>
        <li onClick={e => handleClick(e)}>Image</li>
        <li onClick={e => handleClick(e)}>Text</li>
        <li>Form</li>
      </ul>
      <Preview data={element} />
    </div>
  );
};
