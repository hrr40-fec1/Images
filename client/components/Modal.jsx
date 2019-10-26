import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Modal.css';
import ReactSVG from 'react-svg';

function Modal({ showModal, toggleModal, imageUrls }) {
  return (
    <div className={`modal ${showModal ? 'showModal' : 'hideModal'}`}
      onKeyPress={(event) => {console.log(event.target)}}
    >
      <h1>Modal says HI!</h1>
      <p>Para-a-graf</p>
      <button
        type="button"
        className="btn-close"
        onClick={toggleModal}
        aria-label="toggle modal"
      />
      <button
        type="button"
        className="btn-right-arrow"
        name="right-arrow"
        onFocus={(event) => console.log(event.target.name)}
        onBlur={((event) => console.log('blured'))}
        aria-label="toggle modal"
        />
      <button
        type="button"
        className="btn-left-arrow"
        name="left-arrow"
        onFocus={(event) => console.log(event.target.name)}
        onBlur={((event) => console.log('blured'))}
        aria-label="select left"
      />
    </div>
  );
}

export default Modal;
