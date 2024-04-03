import React from 'react';
import './Detail.css';

const Detail: React.FC<{postDetail: number[]}> = ({postDetail}) => {
  const [duration, views, shared] = postDetail;
  return (
    <div className="detail">
      <p>{duration} <span className='label'>Min •</span></p>
      <p>{views} <span className='label'>Views •</span></p>
      <p>{shared} <span className='label'>Comments</span></p>
    </div>
  );
};

export default Detail;
