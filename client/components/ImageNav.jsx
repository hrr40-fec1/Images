import React from 'react';
import { baseUrl, smallSize } from '../config';

const ImageNav = ({ imageSelect, imageUrls }) => {
  return (
    <div className="imageNav">
      {imageUrls.map((imageUrl, slideIndex) => {
        return (
          <img
            className='thumbNail'
            onClick={() => imageSelect(slideIndex)}
            src={`${baseUrl}/${smallSize}/${imageUrl}`}
            alt='shirt'
            width='117'
            key={imageUrl}
          />
        );
      })}
    </div>
  );
};

export default ImageNav;
