import React from 'react';

const ImageNav = ({ imageSelect, imageUrls }) => {
  return (
    <div className='imageNav'>
      {imageUrls.map((imageUrl, slideIndex) => {
        return (
          <img
            className='thumbNail'
            onClick={() => imageSelect(slideIndex)}
            src={`https://fec1targetclone.s3-us-west-1.amazonaws.com/tshirts/488/${imageUrl}`}
            alt='shirt'
            width='117'
            key={imageUrl}
          />
        )
      })}
    </div>
  )
};

export default ImageNav;
