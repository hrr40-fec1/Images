import React from 'react';
import { baseUrl, smallSize } from '../../config';

const BottomNav = function BottomNav({ urls, selectByThumb, slideIndex }) {
  return (
    <div className="img-bottom-nav">
      {
        urls.map((url, idx) => {
          return (
            <button
              type="button"
              onClick={() => selectByThumb(idx)}
              // tabIndex="0"
              className={`img-bottom-thumb ${(idx === slideIndex) && "thumb-selected"}`}
              style={{ backgroundImage: `url(${baseUrl}/${smallSize}/${url})`, backgroundSize: 'cover' }}
            />
          );
        })
      }
    </div>
  );
};

export default BottomNav;
