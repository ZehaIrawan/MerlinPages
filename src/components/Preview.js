import React from 'react';

export const Preview = ({ data }) => {
  return <div id="preview">{data.map(entry => entry)}</div>;
};
