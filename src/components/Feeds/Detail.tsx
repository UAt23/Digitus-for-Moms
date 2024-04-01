import React from 'react';
import './Detail.css';

const Detail: React.FC = () => {
  return (
    <div className="detail">
      <p>2 <span className='label'>Min •</span></p>
      <p>5 <span className='label'>Views •</span></p>
      <p>6 <span className='label'>Comments</span></p>
    </div>
  );
};

export default Detail;
