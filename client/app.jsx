import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
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
      productId: 56,
      slideIndex: 0,
    };
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

  render() {
    const images = this.state.imageUrls.map(imageUrl => {
      return (
      <div className='imgDiv'>
        <img src={`https://fec1targetclone.s3-us-west-1.amazonaws.com/tshirts/488/${imageUrl}`} alt="shirt" />
      </div>
      )
    });

    const settings = {
      dots: false,
      slidesToShow: 1.5,
      // afterChange: () => alert('changed')
    };

    return (
      <div className='mainDiv'>
        <ImageNav imageUrls={this.state.imageUrls} />
        <div className='container'>
          <Slider {...settings}>
            {images}
          </Slider>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('imagesCarousel'));