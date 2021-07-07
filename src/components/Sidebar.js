import React, { useState } from 'react';
import { Preview } from './Preview';

export const Sidebar = () => {
  const [element, setElement] = useState([]);
  let store = [];

  const handleClick = e => {
    setElement(element => [...element, data[e]]);
    test(data[e])
  };

  const test = (e) => {
    store.push(e.toString())
    console.log(store);
  };

  const data = {
    Image: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w&s"
        alt="cat"
      />
    ),
    Text: <h1>Test</h1>,
    Form: (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    ),
  };

  const download = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [
        `<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>`,
      ],
      { type: 'html' },
    );
    element.href = URL.createObjectURL(file);
    element.download = 'myFile.html';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="sidebar">
      <input id="myInput" />
      <button onClick={download}>Download</button>
      <button onClick={test}>Test</button>
      Sidebar with item
      <ul>
        <li onClick={e => handleClick('Image')}>Image</li>
        <li onClick={e => handleClick('Text')}>Text</li>
        <li onClick={e => handleClick('Form')}>Form</li>
      </ul>
      <Preview data={element} />
    </div>
  );
};
