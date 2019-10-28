import React from 'react';
import { baseUrl, largeSize } from '../../config';

const MainImage = function MainImage({ url, toggleModal, selectByArrow }) {
  return (
    <div id="container-modal">
      <button
        type="button"
        className="btn btn-arrow btn-arrow-left"
        name="left-arrow"
        onClick={() => selectByArrow('left')}
        aria-label="select left"
      />
      <img
        src={`${baseUrl}/${largeSize}/${url}`}
        alt="Imagine this is a shirt"
        className="img-main"
      />
      <button
        type="button"
        className="btn btn-arrow"
        name="right-arrow"
        onClick={() => selectByArrow('right')}
        aria-label="toggle modal"
      />
      <button
        type="button"
        className="btn btn-close"
        onClick={toggleModal}
        aria-label="toggle modal"
      />
    </div>
  );
};

export default MainImage;
