import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios'
import './styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageNav from './components/ImageNav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      productId: 5,
      slideIndex: 0,
    };
    this.imageSelect = this.imageSelect.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/images/${this.state.productId}`)
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({
          imageUrls: response.data
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  imageSelect(slideIndex) {
    this.setState({slideIndex});
    this.slider.slickGoTo(slideIndex);
  }

  render() {
    const images = this.state.imageUrls.map(imageUrl => {
      return (
      <div className='imgDiv' key={imageUrl}/*  onClick={() => alert('kilct.')} */>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'shirt',
              // isFluidWidth: true,
              width: 488,
              height: 488,
              src: `https://fec1targetclone.s3-us-west-1.amazonaws.com/tshirts/488/${imageUrl}`
            },
            largeImage: {
              src: `https://fec1targetclone.s3-us-west-1.amazonaws.com/tshirts/1400/${imageUrl}`,
              width: 1400,
              height: 1400
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

    return (
      <div className='mainDiv'>
        <ImageNav imageUrls={this.state.imageUrls} imageSelect={this.imageSelect}/>
        <div className='container'>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {images}
          </Slider>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('imagesCarousel'));