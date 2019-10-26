import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageNav from './components/ImageNav';
import Modal from './components/Modal';
import { baseUrl, largeSize, smallSize } from './config';


class App extends React.Component {
  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.get('productid'));
    this.state = {
      imageUrls: [],
      productId: +searchParams.get('productid'),
      slideIndex: 0,
      showModal: false,
    };
    this.imageSelect = this.imageSelect.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    axios.get(`/api/images/${productId}`)
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({
          imageUrls: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  imageSelect(slideIndex) {
    this.setState({ slideIndex });
    this.slider.slickGoTo(slideIndex);
  }

  toggleModal() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  render() {
    // const { baseUrl, largeSize, smallSize } = config;
    const images = this.state.imageUrls.map(imageUrl => {
      return (
      <div className="imgDiv" key={imageUrl}/*  onClick={() => alert('kilct.')} */>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'shirt',
              // isFluidWidth: true,
              width: smallSize,
              height: smallSize,
              src: `${baseUrl}/${smallSize}/${imageUrl}`,
            },
            largeImage: {
              src: `${baseUrl}/${largeSize}/${imageUrl}`,
              width: largeSize,
              height: largeSize,
            },
            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },

              enlargedImagePosition: 'over'

          }}
        />
      </div>
      )
    });

    const settings = {
      dots: false,
      slidesToShow: 1,
      className: 'center',
      centerMode: true,
      centerPadding: '60px',
      arrows: false,
    };

    const { imageUrls, showModal } = this.state;

    return (
      <div className="mainDiv">
        <ImageNav imageUrls={imageUrls} imageSelect={this.imageSelect} />
        <div className="container" onClick={this.toggleModal}>
          <Slider
            ref={(slider) => (this.slider = slider)}
            {...settings}
          >
            {images}
          </Slider>
        </div>
        <Modal
          toggleModal={this.toggleModal}
          imageUrls={imageUrls}
          showModal={showModal}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('imagesCarousel'));