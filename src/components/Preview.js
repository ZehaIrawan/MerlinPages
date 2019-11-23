import React from 'react';

export const Preview = ({ data }) => {

  return <div className="preview">{data.map(entry =>
    entry
  )}</div>;
};
