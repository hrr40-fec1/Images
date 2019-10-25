import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Modal.css';

function Modal({ showModal }) {
  return (
    <div className={`modal ${showModal ? 'showModal' : 'hideModal'}`}>
      <h1>Modal says HI!</h1>
      <p>Para-a-graf</p>
    </div>
  );
}

export default Modal;
