import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Triangle } from 'react-loader-spinner';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34587378-1709a2c174b77a7efdbc7c71b';

class ImageGallery extends Component {
  state = {
    images: {},
    status: '',
  };
  componentDidUpdate({ imgToSearch }, _) {
    if (imgToSearch !== this.props.imgToSearch) {
      this.getImages();
    }
  }
  async getImages() {
    try {
        this.setState({ status: 'pending' });
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.props.imgToSearch}&image_type=photo&per_page=30`
      );
      this.setState({ images: response.data.hits, status:'resolved'});
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  }
  render() {
    const { images, status} = this.state;

    if (status === 'pending') {
      return <Triangle />;
    }

    if (status === 'rejected') {
      return (
        <h1>Opps... Something went wrong :( </h1>
      );
    }

    if (status === 'resolved') {
      return (
        <div>
          <ul>
            {images.map(image => (
              <ImageGalleryItem key={image.id} imgUrl={image.webformatURL} />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export { ImageGallery };
