import React from 'react';
import ReactDom from 'react-dom';
import Slider from 'react-slick';
import axios from 'axios'
import './styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      productId: 56
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
        <img src={imageUrl} alt="shirt" />
      </div>
      )
    });

    const settings = {
      dots: false
    };

    return (
      <div className='container'>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
    );
  }

}

ReactDom.render(<App />, document.getElementById('imagesCarousel'));