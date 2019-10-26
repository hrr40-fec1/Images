import React from 'react';
import './Modal.css';
import MainImage from './MainImage';
import BottomNav from './BottomNav';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };


    this.selectByThumb = this.selectByThumb.bind(this);
    this.selectByArrow = this.selectByArrow.bind(this);
  }

  selectByThumb(idx) {
    console.log(idx);
    this.setState({
      slideIndex: idx,
    });
  }

  selectByArrow(direction) {
    const incrementBy = direction === 'left' ? -1 : 1;
    const numUrls = this.props.imageUrls.length;
    this.setState((prevstate) => {
      const indexSum = prevstate.slideIndex + incrementBy
      const slideIndex = indexSum >= numUrls ? 0 :
        indexSum < 0 ? numUrls - 1 : indexSum;
        return {slideIndex}
    });
  }

  render() {

    const { showModal, toggleModal, imageUrls } = this.props;
    const { slideIndex } = this.state;

    return (
      <div
        className={`modal ${showModal ? 'showModal' : 'hideModal'}`}
      >
        <MainImage
          url={imageUrls[slideIndex]}
          toggleModal={toggleModal}
          selectByArrow={this.selectByArrow}
        />
        <BottomNav
          urls={imageUrls}
          slideIndex={slideIndex}
          selectByThumb={this.selectByThumb}
        />

      </div>
    );
  }
}

export default Modal;
