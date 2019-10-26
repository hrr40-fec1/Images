import React from 'react';
import { baseUrl, smallSize } from '../../config';

const BottomNav = function BottomNav({ urls, selectByThumb, slideIndex }) {
  return (
    <div className="img-bottom-nav">
      {
        urls.map((url, idx) => {
          return (
            <img
              className={`img-bottom-thumb ${(idx === slideIndex) && "thumb-selected"}`}
              src={`${baseUrl}/${smallSize}/${url}`}
              alt="Imagine a small shirt"
              onClick={() => selectByThumb(idx)}
              // tabIndex="0"
            />
          );
        })
      }
    </div>
  );
};

export default BottomNav;
