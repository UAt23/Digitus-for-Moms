import React from 'react';
import './ImageContent.css'

const ImageContent: React.FC<{postImage: string}> = ({postImage}) => {
  return (
    <div className="imageContent">
      <img src={postImage} alt='asd'/>
    </div>
  );
};

export default ImageContent;
