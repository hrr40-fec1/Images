import React from 'react';
import ReactDom from 'react-dom';
import Slider from 'react-slick';
import axios from 'axios'
// import './styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      productId: 14
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
    const images = this.state.imageUrls.map(imageUrl =>
      <img src={imageUrl} alt="shirt"  width="400" />
    );
      console.log(this.state.imageUrls)

    return (
      <div >
        {images.length ? images : 'No Images for Product'}
      </div>
    );
  }

}

ReactDom.render(<App />, document.getElementById('imagesCarousel'));