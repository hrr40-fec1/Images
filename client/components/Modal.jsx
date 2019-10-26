import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Modal.css';
import ReactSVG from 'react-svg';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    //showModal, toggleModal, imageUrls
    this.state = {
      focused: '',
      slideIndex: 0,
      imageUrls: props.imageUrls,
    }
  }

  render() {
    return (
      <div
        className={`modal ${this.props.showModal ? 'showModal' : 'hideModal'}`}
        onKeyPress={(event) => {console.log(event.target)}}
      >
        <h1>Modal says HI!</h1>
        <p>Para-a-graf</p>
        <button
          type="button"
          className="btn btn-close"
          onClick={this.props.toggleModal}
          aria-label="toggle modal"
        />
        <button
          type="button"
          className="btn btn-arrow"
          name="right-arrow"
          onFocus={(event) => console.log(event.target.name)}
          onBlur={((event) => console.log('blured'))}
          aria-label="toggle modal"
        />
        <button
          type="button"
          className="btn btn-arrow btn-arrow-left"
          name="left-arrow"
          onFocus={(event) => console.log(event.target.name)}
          onBlur={((event) => console.log('blured'))}
          aria-label="select left"
        />
      </div>
    );
  }
}

export default Modal;
