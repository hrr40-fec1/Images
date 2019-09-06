import React from 'react';

const ImageNav = ({ imageSelect, imageUrls }) => {
  return (
    <div className='imageNav'>
      {imageUrls.map(imageUrl => {
        return (
          <img className='thumbNail' src={`https://fec1targetclone.s3-us-west-1.amazonaws.com/tshirts/488/${imageUrl}`} alt='shirt' width='117'/>
        )
      })}
    </div>
  )
};

export default ImageNav;